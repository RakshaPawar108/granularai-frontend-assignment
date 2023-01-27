
# Granular.ai Frontend Assignment

Assignment solution for the position of Frontend Developer for Granular.ai

View the live website here: [https://granularai-frontend-assignment.netlify.app/](https://granularai-frontend-assignment.netlify.app/)





## Features

- Uses ReactJS, Typescript, CSS, and Javascript 
- Maps using [react-leaflet](https://react-leaflet.js.org/) and [leaflet.js](https://leafletjs.com/index.html)
- Fully Responsive Design
- Reusable Components
## API Reference

#### Nominatim API

Nominatim (from the Latin, 'by name') is a tool to search OSM data by name and address and to generate synthetic addresses of OSM points (reverse geocoding).

Nominatim indexes named (or numbered) features within the OpenStreetMap (OSM) dataset and a subset of other unnamed features (pubs, hotels, churches, etc).

Docs Link: [Nominatim API](https://nominatim.org/release-docs/latest/)

```http
  GET https://nominatim.openstreetmap.org/search?<params>
```






## Usage

- Opening the application shows a map with location set to Boston, MA.
- Type the location you want to search in the Search Box.
- A list of options matching the query will appear. Click on the desired option.
- Click the 'Fly to Location' button.
- The map will move to the location which is searched and show its administrative boundaries and the location will get added to the history list.
- Click on the 'History' button to view the list of previously viewed locations.
- Click on any Location from the list and click on 'Fly To Location' button to go to that location.
- Click on the 'Share' button next to the location in the history list to copy the link to that location.
- Paste the link in the URL box in a new tab and click on 'Fly To Location' button.
- Clicking on the Map marker shows the name of the location in a small popup.
- The box in the bottom right corner shows the details of the location searched like Population etc.

PS: The 'Fly to Location' button is provided as the Nominatim API does not support the autocomplete feature and allows for only 1 request per second. The autocomplete feature results in sending multiple requests to the API which may result in an IP ban according to the [Nominatim API Policy](https://operations.osmfoundation.org/policies/nominatim/).


## Run Locally

Clone the project

```bash
  git clone https://github.com/RakshaPawar108/granularai-frontend-assignment.git
```

Go to the project directory

```bash
  cd granularai-frontend-assignment
```

Install dependencies

```bash
  npm install
  
  OR

  yarn install
```

Start the development server

```bash
  npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Demo

![Demo1](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


![Demo2](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


![Demo3](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## About the Developer

- GitHub: [@RakshaPawar108](https://github.com/RakshaPawar108)
- Twitter: [@rakshapawar108](https://twitter.com/rakshapawar108)
- LinkedIn: [https://www.linkedin.com/in/rakshapawar/](https://www.linkedin.com/in/rakshapawar/)
- Peerlist: [https://peerlist.io/rakshapawar](https://peerlist.io/rakshapawar)