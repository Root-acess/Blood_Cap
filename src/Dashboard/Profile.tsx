import { useEffect, useState } from "react";
import './Style/Style.css';
import { auth, db, storage } from "../firebase"; // Import your Firebase setup
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { getDatabase, ref as dbRef, set, child, get, ref } from "firebase/database"; // Import Realtime Database functions

interface UserData {
    name: string;
    email: string;
    phone: string;
    bloodGroup: string;
    about: string;
    photoURL: string;
}

const Profile = () => {
    const [userData, setUserData] = useState<UserData>({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        about: "",
        photoURL: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        fetchUserData();
        showUserProfile(); // Show basic user info on component mount
    }, []);

    const fetchUserData = async () => {
        const user = auth.currentUser;

        if (user) {
            try {
                // Fetch user data from Firestore
                const userDoc = doc(db, "users", user.uid);
                const docSnap = await getDoc(userDoc);

                // Fetch user data from Realtime Database
                const dbSnapshot = await get(child(dbRef(getDatabase()), `users/${user.uid}`));
                
                if (dbSnapshot.exists()) {
                    const dbData = dbSnapshot.val();
                    setUserData(prev => ({ ...prev, ...dbData })); // Merge Firestore and Realtime data
                } else {
                    console.log("No data available in Realtime Database");
                    setError("No user data found.");
                }

                if (!docSnap.exists()) {
                    console.log('No user data found for uid:', user.uid);
                    setError("No user data found.");
                }
            } catch (err) {
                console.error("Error fetching user data:", err);
                setError("Error fetching user data.");
            }
        } else {
            setError("User is not logged in.");
        }
        setLoading(false);
    };

    const showUserProfile = () => {
        const user = auth.currentUser;
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            console.log(
                "Display Name -", 
                displayName, 
                ", Email -", 
                email, 
                ", Email Verified - ", 
                emailVerified, 
                ", Photo URL -", 
                photoURL
            );

            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("Provider-specific UID: " + profile.uid);
                console.log("Name: " + profile.displayName);
                console.log("Email: " + profile.email);
                console.log("Photo URL: " + profile.photoURL);
            });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const uploadProfilePicture = async () => {
        const user = auth.currentUser;

        if (!user || !file) return;

        const storageReference = storageRef(storage, `profile_pictures/${user.uid}/${file.name}`);

        try {
            await uploadBytes(storageReference, file);
            const photoURL = await getDownloadURL(storageReference);
            await updateUserInFirestore(user.uid, { photoURL });
            await writeUserData(user.uid, { ...userData, photoURL }); // Update Realtime Database
            setUserData((prev) => ({ ...prev, photoURL }));
            setFile(null); // Reset the file input
        } catch (error) {
            console.error("Error uploading profile picture:", error);
        }
    };

    const writeUserData = async (userId: string, userData: UserData) => {
        const db = getDatabase();
        await set(ref(db, 'users/' + userId), {
            username: userData.name,
            email: userData.email,
            phone: userData.phone,
            bloodGroup: userData.bloodGroup,
            about: userData.about,
            profile_picture: userData.photoURL
        });
    };

    const updateUserInFirestore = async (uid: string, data: Partial<UserData>) => {
        const userDoc = doc(db, "users", uid);
        await setDoc(userDoc, data, { merge: true });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (file) {
            await uploadProfilePicture();
        }
        await updateUserInFirestore(auth.currentUser?.uid as string, userData);
        await writeUserData(auth.currentUser?.uid as string, userData); // Write to Realtime Database
        setIsEditing(false);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="profile-container">
            {error && <p className="error">{error}</p>}
            <h1>User Profile</h1>
            <div className="avatar-container">
                <img
                    src={userData.photoURL || "default-avatar.png"} // Provide a default avatar
                    alt="Profile Avatar"
                    onClick={() => document.getElementById("file-input")?.click()}
                    className="avatar"
                />
                <input
                    type="file"
                    id="file-input"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
            </div>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className={`form-input ${!isEditing ? 'readonly' : ''}`}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        readOnly
                        className="form-input readonly"
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className={`form-input ${!isEditing ? 'readonly' : ''}`}
                    />
                </div>
                <div className="form-group">
                    <label>Blood Group:</label>
                    <input
                        type="text"
                        name="bloodGroup"
                        value={userData.bloodGroup}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className={`form-input ${!isEditing ? 'readonly' : ''}`}
                    />
                </div>
                <div className="form-group">
                    <label>About:</label>
                    <textarea
                        name="about"
                        value={userData.about}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className={`form-textarea ${!isEditing ? 'readonly' : ''}`}
                    />
                </div>
                {isEditing && <button type="submit" className="save-button">Save Changes</button>}
            </form>
            <button onClick={() => setIsEditing((prev) => !prev)} className="edit-button">
                {isEditing ? "Cancel" : "Edit"}
            </button>
        </div>
    );
};

export default Profile;
