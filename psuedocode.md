# HTML

(Mel & Joe)
When i open the page, then i see a search box and nav at the top

- nav at the top
- Search Box is in the center of the page
- about us / contact us (possible html file and/or add tab)
- footer

## <body>

In the Nav, i can see the Logo

- tabs for hotels, rests, attractions, weather, about us/contact . more - (optional)

- in <main>,
- search box with a drop down for tabs , and search button

### after search

- nav bar
- search bar top
- "jumbotron" & cards for displaying results
  - container with .restaurant information
  - main content container with city name and local weather
    - 5 day forecast , icons , temp, humidity, wind speed
  - container for attractions
  - container for local hotels

# CSS

## Using the materialize css framework

(Mel & Joe)

##<body>

- <nav> style, color, font, drop downs
- <main>: background photo, fonts
  -search bar:

# Javascript / API Integration

(Cristian)

## Regular Javascript

## API Added

1. Weather API info

- Grab current weather data
  - Temperature
  - icon & description of the weather
  - humidity
  - wind speed
  - lon
  - lat
- Grab 5 day weather data
- Date
- temp
- icon (With description)
- humidity

2. Zomato API info

- get lon and lat (either in weather api or other)
  - with **lon** and **lat** we can get the _geocode_
    - in geocode we will grab the entity_type and entity_id
  - With the type and id we will put it in the **location_details**
    - in here we will grab _best_rated_details_ , _reviews_, _ratings_, etc...

3. Trip advisor api

-
