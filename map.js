const data = {
    "AndhraPradesh": ["Known for its rich cultural heritage, Andhra Pradesh has a diverse landscape with temples, beaches, and thriving agriculture. The state is a major producer of rice and is renowned for Kuchipudi dance and spicy cuisine."],
    "ArunachalPradesh": ["Situated in India's northeastern frontier, Arunachal Pradesh is famous for its scenic beauty, dense forests, and indigenous tribal cultures. Home to Tawang Monastery, it offers adventure tourism, including trekking and river rafting in a pristine natural environment."],
    "Assam": ["Assam is known for its tea gardens, wildlife sanctuaries, and the mighty Brahmaputra River. Rich in culture, it hosts vibrant festivals like Bihu and boasts UNESCO-listed Kaziranga National Park, home to one-horned rhinoceroses."],
    "Bihar": ["Bihar is a land of ancient history, being home to the Nalanda University and Mahabodhi Temple. It played a pivotal role in the development of Buddhism and Jainism and is known for the Ganges plains and Maithili culture."],
    "Chhattisgarh": ["This central Indian state is a hub for rich tribal culture, natural beauty, and mineral resources. It’s famous for its waterfalls, like Chitrakoot, wildlife reserves, and growing industrial and power sectors, particularly in steel and energy production."],
    "Goa": ["A coastal paradise, Goa is famed for its golden beaches, vibrant nightlife, Portuguese heritage, and delicious seafood. It’s a favorite destination for tourists seeking relaxation, water sports, and its blend of East-West culture and architecture."],
    "Gujarat": ["Gujarat is known for its vibrant festivals, thriving industries, and historic cities like Ahmedabad. The state boasts a rich heritage with sites like the Gir Forest (home to Asiatic lions), the Rann of Kutch, and the Sabarmati Ashram."],
    "Haryana": ["Haryana is an agricultural powerhouse with a significant contribution to India's food production. It is known for its folk culture, traditional sports like wrestling, and the fast-growing city of Gurgaon, a hub for technology and business."],
    "HimachalPradesh": ["A picturesque state in the Himalayas, Himachal Pradesh is a popular destination for trekking, skiing, and spiritual retreats. Known for its hill stations like Shimla and Manali, it offers lush valleys, snow-capped mountains, and serene monasteries."],
    "Jharkhand": ["Rich in mineral wealth, Jharkhand is known for its forests, waterfalls, and tribal culture. It houses key industrial cities like Jamshedpur and Dhanbad and offers natural beauty in places like Betla National Park and Hundru Falls."],
    "Karnataka": ["Karnataka is a state of diverse landscapes and cultures, with Bengaluru being the IT hub of India. It has a rich history of temples, heritage sites like Hampi, and lush green hill stations like Coorg, along with vibrant festivals."],
    "Kerala": ["Known as 'God's Own Country,' Kerala is famous for its backwaters, lush greenery, and cultural traditions. The state has a high literacy rate and offers Ayurvedic treatments, Kathakali performances, and a coastline with beautiful beaches."],
    "MadhyaPradesh": ["Called the 'Heart of India,' Madhya Pradesh is home to rich wildlife, historic temples, and UNESCO World Heritage Sites like Khajuraho and Sanchi. It’s famous for its national parks, including Kanha and Bandhavgarh, and vibrant folk traditions."],
    "Maharashtra": ["Maharashtra is a cultural and economic powerhouse, home to Mumbai, the financial capital of India. It boasts UNESCO-listed Ajanta and Ellora caves, vibrant festivals, Bollywood, and diverse landscapes, from beaches to hill stations like Mahabaleshwar."],
    "Manipur": ["Manipur is known for its serene landscapes, rich tradition of dance (Manipuri), and martial arts. The state's beauty is reflected in its lush valleys, Loktak Lake, and vibrant festivals like Yaoshang and Ningol Chakouba, celebrating its diverse cultures."],
    "Meghalaya": ["Known as the 'Abode of Clouds,' Meghalaya is famous for its waterfalls, caves, and living root bridges. The state is blessed with lush green hills, the cleanest village in Asia (Mawlynnong), and unique cultural traditions of the Khasi, Jaintia, and Garo tribes."],
    "Mizoram": ["Mizoram is a land of rolling hills, dense bamboo forests, and vibrant tribal culture. Known for its festivals like Chapchar Kut and traditional dances, it is also home to scenic landscapes, including waterfalls and serene lakes like Palak Dil."],
    "Nagaland": ["Nagaland is known for its unique tribal heritage and colorful festivals, especially the Hornbill Festival. With picturesque landscapes, including hills and valleys, the state is a blend of cultural diversity, rich history, and vibrant crafts."],
    "Odisha": ["Odisha is famed for its rich temple architecture, including the Sun Temple at Konark and the Jagannath Temple at Puri. The state has a long coastline, vibrant festivals like Rath Yatra, and is known for its classical dance form, Odissi."],
    "Punjab": ["Punjab is the land of vibrant culture, agriculture, and history, known for its warm hospitality, Bhangra dance, and golden fields of wheat. The Golden Temple in Amritsar is a significant spiritual site, and Punjabi cuisine is widely loved."],
    "Rajasthan": ["Rajasthan, the 'Land of Kings,' is famous for its royal heritage, deserts, palaces, and forts like Jaipur’s Amber Fort and Udaipur’s City Palace. Its vibrant culture, folk music, and festivals are a highlight, along with camel rides in the Thar Desert."],
    "Sikkim": ["A small Himalayan state, Sikkim is known for its stunning landscapes, Buddhist monasteries, and Mt. Kanchenjunga, India's highest peak. It boasts rich biodiversity, charming hill towns like Gangtok, and vibrant cultural traditions of its diverse communities."],
    "TamilNadu": ["Tamil Nadu is known for its Dravidian-style temples, classical dance (Bharatanatyam), and vibrant festivals like Pongal. With a rich history and tradition, the state also has beautiful hill stations like Ooty and Kodaikanal, and a booming film industry."],
    "Telangana": ["Telangana is a state of historical significance, known for its rich Nizam heritage, architectural marvels like Charminar, and vibrant festivals. Its capital, Hyderabad, is a tech hub and offers a blend of old-world charm and modernity."],
    "Tripura": ["Tripura is a culturally rich state with diverse tribal heritage, royal palaces like Ujjayanta, and temples. Known for its bamboo handicrafts, the state also has beautiful landscapes with serene lakes and hills, offering a peaceful retreat."],
    "UttarPradesh": ["Uttar Pradesh is a land of historical and spiritual significance, home to the Taj Mahal, Varanasi, and the Ganges River. Known for its vibrant festivals, rich Mughal heritage, and bustling cities, it plays a central role in India's culture and politics."],
    "Uttarakhand": ["Uttarakhand, often called 'Devbhoomi' (Land of Gods), is known for its spiritual significance with destinations like Rishikesh and Haridwar. The state is also a haven for adventure lovers, offering trekking, rafting, and picturesque hill stations like Nainital."],
    "WestBengal": ["West Bengal is known for its cultural richness, being the birthplace of literary greats like Rabindranath Tagore. Famous for Durga Puja, Bengal’s capital Kolkata is a cultural hub, and the state’s scenic landscapes range from the Himalayas to the Sundarbans."],
    "Delhi": ["Delhi, India's capital territory, is a bustling metropolis with a rich historical heritage. It is home to iconic landmarks such as the Red Fort, India Gate, and Qutub Minar. The city offers a vibrant mix of ancient and modern, with diverse culture, cuisine, and architecture."],
    "Chandigarh": ["Chandigarh, a planned city and the capital of both Punjab and Haryana, is renowned for its modern architecture and urban design. Designed by the architect Le Corbusier, it features lush gardens, distinctive buildings, and well-organized sectors, offering a blend of functionality and aesthetics."],
    "JammuKashmir": ["Jammu and Kashmir, a picturesque region in northern India, is famed for its stunning landscapes, including the snow-capped Himalayas and lush valleys. Known for its beautiful gardens, houseboats on Dal Lake, and unique cultural traditions, it is a blend of natural beauty and rich heritage."],
    "AndamanNicobar": ["The Andaman and Nicobar Islands, located in the Bay of Bengal, are known for their pristine beaches, clear waters, and diverse marine life. These islands offer a tropical paradise with opportunities for snorkeling, diving, and exploring lush tropical forests and historical sites."]
};



document.addEventListener('DOMContentLoaded', function () {
    const map = document.getElementById('india-map');
    const info = document.getElementById('info-map');

    // Wait for the SVG to load
    map.addEventListener('load', function () {
        const svgDoc = map.contentDocument;

        // Attach event listeners to each state
        svgDoc.querySelectorAll('path').forEach(state => {
            state.addEventListener('click', function () {
                const title = state.getAttribute('title');
                const link = `States/${title}/${title}.html`;
                console.log(`You clicked on ${title}`);
                window.location.href = link;
            });

            // Change color on hover
            state.addEventListener('mouseenter', function () {
                state.style.fill = '#ffcc00';
                const title = state.getAttribute('title');
                const stateData = data[title] ? data[title][0] : 'Information not available';
                info.innerHTML = `<h1 style="text-align : justify;">${stateData}</h1>`;
            });

            state.addEventListener('mouseleave', function () {
                state.style.fill = '';
                info.innerHTML = ''; // Clear the info box when mouse leaves
            });
        });
    });
});
