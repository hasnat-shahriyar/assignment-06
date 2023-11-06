// Define the URL of the API you want to fetch data from
const apiUrl = 'https://openapi.programming-hero.com/api/ai/tools';

const loadTools = async () => {
    const url = apiUrl;
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools);
}

const displayTools = (tools) => {
    const toolContainer = document.getElementById("card-container");
    tools.forEach((tool) => {
        const toolDiv = document.createElement("div");
        toolDiv.classList.add("p-4", "mt-5", "md:flex", "md:justify-center", "md:space-x-4");
        toolDiv.innerHTML = `
        <div class="bg-white shadow-md rounded-lg">
        <img src="${tool.image}" alt="Image" class="w-80 rounded-lg">
        <div class="p-4">
            <div class="flex justify-between items-center">
                <h2 class="text-lg md:text-xl font-semibold">Features</h2>
            </div>
            <p>1. ${tool.features[0]}</p>
            <p>2. ${tool.features[1]}</p>
            <p>3. ${tool.features[2]}</p>
            <hr class="md:mt-5">
            <h3 class="md:text-md md:text-lg md:font-semibold md:mt-5">${tool.name}</h3>
            
            <div class="flex items-center justify-between mt-3"> <!-- Wrap date and button in a flex container -->
                <p id="date" class="text-sm text-gray-500 mt-3">Published Date: ${tool.published_in}</p>
                <button class="bg-rose-200 hover:bg-rose-300 ease-in-out duration-300 text-white font-semibold py-2 px-2 rounded-full ml-3"> <!-- Add ml-3 for margin to separate the button from the date -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-6 w-6 text-rose-500" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </button>
            </div>
    
        </div>
    </div>
    
    
        `;
        toolContainer.appendChild(toolDiv);
    });
}

loadTools();

/**
        <div class="md:w-1/3 p-4">
            <div class="bg-white shadow-md rounded-lg">
                <img src="" alt="Image" class="w-full rounded-t-lg">
                <div class="p-4">
                    <h2 class="text-lg md:text-xl font-semibold">Features</h2>
                    <p>1. Natural language processing</p>
                    <p>2. Contextual understanding</p>
                    <p>3. Text generation</p>
                    <hr class="mt-5">
                    <!-- Technology Title Section -->
                    <h3 class="text-md md:text-lg font-semibold mt-5">ChatGPT</h3>
                    <!-- Rounded Button with an Arrow Icon -->
                    <div class="flex items-center justify-between mt-3">
                        <input type="date" class="outline-none cursor-text bg-rose-200 hover-bg-rose-300 ease-in-out duration-300 text-rose-500 font-semibold py-1 px-4 rounded-full" id="" name="birthday">
                        <button class="bg-rose-200 hover:bg-rose-300 ease-in-out duration-300 text-white font-semibold py-2 px-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-6 w-6 text-rose-500" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
*/