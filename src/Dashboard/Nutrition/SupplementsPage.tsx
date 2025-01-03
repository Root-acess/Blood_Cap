import React, { useState } from 'react';

interface Product {
  name: string;
  description: string;
  basePrice: number;
  imgSrc: string;
}

const SupplementsPage: React.FC = () => {
  const [cart, setCart] = useState<{ [key: string]: { quantity: number; flavor: string } }>({});
  const [userDetails, setUserDetails] = useState({
    weight: 0,
    height: 0,
    age: 0,
    gender: 'Male',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const products: Product[] = [
    {
      name: 'Whey Protein Isolate',
      description: 'High-quality protein for muscle growth.',
      basePrice: 3499,
      imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-3042-featured_image-Nutrabay_Gold_100_Whey_Protein_Isolate__2_Kg_44_Lb_Rich_Chocolate_Creme.png'
    },
    {
      name: 'BCAA',
      description: 'Helps in muscle recovery and reduces soreness.',
      basePrice: 2299,
      imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/05/NB-NUT-1070-01-01.jpg'
    },
    {
      name: 'Creatine Monohydrate',
      description: 'Boosts strength and power for intense workouts.',
      basePrice: 1799,
      imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/08/NB-NUT-1073-01-01.jpg'
    },
    {
      name: 'Multivitamins',
      description: 'Complete nutrient profile for overall health.',
      basePrice: 999,
      imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-2598-featured_image-Nutrabay_Pro_Active_Multivitamin_for_Men__60_Tabs.png'
    },
    {
        name: 'Whey Protein Isolate',
        description: 'High-quality protein for muscle growth.',
        basePrice: 3499,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-3042-featured_image-Nutrabay_Gold_100_Whey_Protein_Isolate__2_Kg_44_Lb_Rich_Chocolate_Creme.png'
      },
      {
        name: 'BCAA',
        description: 'Helps in muscle recovery and reduces soreness.',
        basePrice: 2299,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/05/NB-NUT-1070-01-01.jpg'
      },
      {
        name: 'Creatine Monohydrate',
        description: 'Boosts strength and power for intense workouts.',
        basePrice: 1799,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/08/NB-NUT-1073-01-01.jpg'
      },
      {
        name: 'Multivitamins',
        description: 'Complete nutrient profile for overall health.',
        basePrice: 999,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-2598-featured_image-Nutrabay_Pro_Active_Multivitamin_for_Men__60_Tabs.png'
      },
      {
        name: 'Pre-Workout Formula',
        description: 'Boosts energy and endurance during workouts.',
        basePrice: 1599,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/07/NB-H2O-1001-04-01-2.jpg'
      },
      {
        name: 'Fish Oil Capsules',
        description: 'Rich in Omega-3 for heart and brain health.',
        basePrice: 1299,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-9757-featured_image-Nutrabay_Pro_Fish_Oil_Omega_3_Triple_Strength__1000mg__60_Caps.png'
      },
      {
        name: 'Vegan Protein Powder',
        description: 'Plant-based protein for muscle repair and growth.',
        basePrice: 2199,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-13525-featured_image-Nutrabay_Pure_100_Pea_Protein_Isolate__1_Kg_22_Lb_Unflavoured.png'
      },
      {
        name: 'Casein Protein',
        description: 'Slow-digesting protein for overnight muscle recovery.',
        basePrice: 2899,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/04/NB-NUT-1049-01-01.jpg'
      },
      {
        name: 'Glutamine',
        description: 'Supports muscle recovery and immune function.',
        basePrice: 1499,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-20406-featured_image-Nutrabay_Gold_LGlutamine__180_gm_039_Lb_Cola.png'
      },
      {
        name: 'Whey Protein Concentrate',
        description: 'Protein for muscle growth and post-workout recovery.',
        basePrice: 2299,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/06/NB-NUT-1061-05-01.jpg'
      },
      {
        name: 'L-Carnitine',
        description: 'Promotes fat loss and boosts energy.',
        basePrice: 1699,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-2604-featured_image-Nutrabay_Pro_LCarnitine_1000mg__60_Tabs.png'
      },
      {
        name: 'Magnesium',
        description: 'Essential mineral for muscle relaxation and sleep.',
        basePrice: 999,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-6037-featured_image-HealthAid_Magnesium_Orotate_500mg__30_Tabs.jpg'
      },
      {
        name: 'ZMA',
        description: 'Supports muscle recovery and improves sleep quality.',
        basePrice: 1799,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-9762-featured_image-Nutrabay_Pro_Zinc__Magnesium__B6_ZMA__500mg__60_Tabs.png'
      },
      {
        name: 'Collagen Peptides',
        description: 'Supports skin, hair, and joint health.',
        basePrice: 2199,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-29367-featured_image-Nutrabay_Marine_Glow_Collagen__200_gm_044_Lb_Mango.png'
      },
      {
        name: 'Protein Bars',
        description: 'Convenient protein-rich snack.',
        basePrice: 1499,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2021/12/NB-YGB-1000-05-01.jpg'
      },
      {
        name: 'Turmeric Curcumin',
        description: 'Anti-inflammatory and antioxidant properties.',
        basePrice: 899,
        imgSrc: 'https://cdn2.nutrabay.com/uploads/variant/images/variant-1271-featured_image-Vlado%E2%80%99s_Himalayan_Organics_Curcumin_with_Bioperine_1500mg_with_95_Curcuminoids__90_Tabs.jpg'
      },
      {
        name: 'Apple Cider Vinegar',
        description: 'Helps with digestion and weight management.',
        basePrice: 599,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/11/NB-NUT-1016-01-01.jpg'
      },
      {
        name: 'Joint Support',
        description: 'Supports joint health and mobility.',
        basePrice: 1999,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2022/01/NB-POL-1023-01-01.jpg'
      },
      {
        name: 'Energy Booster',
        description: 'Provides sustained energy throughout the day.',
        basePrice: 1199,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/10/NB-OSC-1005-02-01.jpg'
      },
      {
        name: 'Vegan BCAA',
        description: 'Plant-based amino acids for muscle recovery.',
        basePrice: 1999,
        imgSrc: 'https://cdn.nutrabay.com/wp-content/uploads/2023/05/NB-NUT-1070-01-01.jpg'
      }
  ];

  
  const handleInputChange = (name: string, key: string, value: any) => {
    setCart((prev) => ({
      ...prev,
      [name]: { ...prev[name], [key]: value }
    }));
  };

  const handleUserDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner
    setTimeout(() => {
      setIsSubmitted(true); // Mark form as submitted after loading
      setIsLoading(false); // Hide loading spinner
    }, 2000); // Simulate a delay (e.g., API call or processing time)
  };

  const handleBack = () => {
    setIsSubmitted(false); // Set isSubmitted to false to show the form again
  };

  const calculateTotalPrice = (productName: string) => {
    const product = products.find((product) => product.name === productName);
    const customization = cart[productName];

    if (product && customization) {
      const total = product.basePrice * customization.quantity;
      return total;
    }
    return product ? product.basePrice : 0;
  };

  // Sample logic to personalize recommendations based on user input
  const recommendProduct = () => {
    const { weight, height, age, gender } = userDetails;

    if (age < 30) {
      return products.filter((product) => product.name.includes('Protein')); // For younger users, suggest protein-based products
    }

    if (weight > 80) {
      return products.filter((product) => product.name.includes('Creatine') || product.name.includes('BCAA')); // Heavier individuals may benefit from muscle recovery or strength support
    }

    return products; // Return all products as a fallback
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Supplements Store</h2>

      {!isSubmitted ? (
        // User Input Form
        <form onSubmit={handleSubmit} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={userDetails.weight}
                onChange={handleUserDetailsChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={userDetails.height}
                onChange={handleUserDetailsChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={userDetails.age}
                onChange={handleUserDetailsChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Gender</label>
              <select
                name="gender"
                value={userDetails.gender}
                onChange={handleUserDetailsChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {isLoading ? (
              <span className="flex justify-center">
                <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"></path>
                </svg>
                Loading...
              </span>
            ) : (
              'Submit Details'
            )}
          </button>
        </form>
      ) : (
        // Display Recommended Products After Submission
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendProduct().map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={item.imgSrc} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700">Quantity</label>
                  <input
                    type="number"
                    value={cart[item.name]?.quantity || 1}
                    onChange={(e) => handleInputChange(item.name, 'quantity', Number(e.target.value))}
                    min={1}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700">Flavor</label>
                  <select
                    value={cart[item.name]?.flavor || 'Vanilla'}
                    onChange={(e) => handleInputChange(item.name, 'flavor', e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  >
                    <option value="Vanilla">Vanilla</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="Unflavored">Unflavored</option>
                  </select>
                </div>

                <p className="text-gray-900 font-semibold text-lg mt-2">₹{calculateTotalPrice(item.name)}</p>
                <button className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <button 
            onClick={handleBack} 
            className="mt-6 w-full py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Back to Edit Details
          </button>
        </div>
      )}
    </div>
  );
};

export default SupplementsPage;