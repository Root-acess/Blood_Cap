const Gallery = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
            <div className="text-center py-10 bg-black">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
                <span className="text-white">Happy </span>
                <span className="text-red-600">Donor</span>
                <span className="text-white"> Across the World </span>
            </h1>
           
            <p className="mt-2 text-lg text-white/80">
                Join us in making a difference, one donation at a time!
            </p>
        </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 1" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 2" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 3" />
                </div>
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 4" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 5" />
                </div>
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 6" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 7" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 8" />
                </div>
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 9" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Image 10" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
