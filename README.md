# Project 3
# Use tools learned and skills gained through the past 6 modules to work as a team for Project 3.

## Team
* Rob Cortes
* Fatou Gai
* Stephanie Wolter

# Get On The List
* How does an author get on any of the NYT Bestseller lists? Is it hard? Is it about merit? Money? Marketing? This project uses data from the NYT Bestseller lists to create statistical summaries on the leading authors, books, and publishers. With this, through predictive analysis, readers can find their next favorite book.

## SetUp

* Repository: [Get On The List](https://github.com/StephWolter/GetOnTheList.git)

* File Structure:

        * Images                          # folder for reference photos
            * Logos                       # folder with 12 company logo .png files
            * Memes                       # folder with 3 memes used in presentation
            * CSVs                               # Main folder for csv
            * Additional Image Files
        * data_crud
            * alt_csvs                     # folder with 7 .csv files 
            * ERD.png
            * Insert_NYT_Data.ipynb
            * api_keys.py
            * local_postgres.py
            * psql_connect.py
            * Datascrape.py                 # used for gathering html data with BeautifulSoup
            * schema.sql
            * scema_sqlite.sql
        * Static                            # Folder for html to pull from 
            * CSS
                * style.css
            * JS                            # various javascript files
                * data.js
                * faq.js
                * functions_final.js        # main code for charts
                * logic.js
                * top_rated.js              # code for metadata tables
               
        * Templates                         # Templates for site
            * charts.html 
            * faq.html
            * index.html 
            * team.html
            * the plan.html 
            * top-rated.html 
            
            
        * .gitignore                        # git ignore file
        * app.py                            # Flask query
        * nyt_bestsellers.sqlite            # Working file
        * ReadMe.md

* Final Website: [Get On The List]()

* Presentation in Google Slides: [Get On The List](https://docs.google.com/presentation/d/1IOOp9pK_GgrUQ2tU1cK2cchfEIlbsooc1lksEFIRrfQ/edit?usp=sharing)

## Step 1: Setting Up
### Conceptualization
* Further developing work done in Project 1
* Brainstormed site creation
    * ![sketch](https://github.com/StephWolter/GetOnTheList/blob/main/Images/Website_Brainstorm.png)
* Agreed upon data needed for individual charts
### Scoped out data to support a plan
* Checked all data available on NYT Bestseller 
* Checked formats available
* Researched getting on the lists


## Gathering and Integration of Data
### Database Creation
* The primary data source for the tool is the NYT Books API, whose 'full overview' path (/lists/full-overview.json) provides json information on all books on all bestseller lists for a specified date.
* Given the structured nature of the information obtained from our data source, we elected to use a relational database for the back end.
* Using Postgres, we created a SQL database with the following entity relationship diagram (ERD):
       *  ![image](https://github.com/StephWolter/GetOnTheList/assets/124944383/bcf3f26d-dbbe-465f-a8bf-28b7e557ae74)
### Data Insertion with SQLAlchemy
* SQLAlchemy was used to write Python code that retrieves data from NYT and inserts the data into the database.
* The [psql_connect.py](/data_crud/psql_connect.py) script manages the connection to the database.
     * This script imports an untracked file, local_postgres.py, with the local machine's Postgres credentials.    
* The [Insert_NYT_Data.ipynb](/data_crud/Insert_NYT_Data.ipynb) script imports psql_connect.py, makes calls to the NYT API, and inserts the responses from the API into the SQL database.
### Manual Data Insertion
* The responses from the NYT Books API are NOT by themselves sufficient to populate the entire database. This is because the NYT data only contains imprint-level publishing information.
     * For example, many Colleen Hoover books are published by Atria, which is an imprint of Simon & Schuster. The NYT API shows Atria as the 'publisher' of the Colleen Hoover books, despite the fact that Simon & Schuster, as the owner of Atria, was the effective publisher of these books from an economic perspective.
* The publishers table is a manually created table of ultimate parent publishers.
* The ownership table is a manually created crosswalk between publishers and any imprints they own.
### SQLite File Creation
* The Postgres database was deployed through a local sqlite file, nyt_bestsellers.sqlite.
* This file was created through the following steps:
     * Export the Postgres SQL tables as CSV files (found in the alt_CSVs folder)
     * Convert schema.sql into a SQLite-friendly schema, called schema_sqlite.sql
     * Create a SQLite database, read the schema, and import the CSVs as demonstrated below
```
sqlite3 nyt_bestsellers.sqlite
.read data_crud/schema_sqlite.sql
.mode csv
.import data_crud/alt_CSVs/<table_name.csv> table_name
```

## Website building Pt 1
### HTML design created ready for data population
The six following html files: index.html, the plan.html, charts.html, top-rated.html, faq.html, and team.html were created to serve as different pages in our webpage. The different html files reference the necessary javascript files.
       * For example, the chart.html file references a JavaScript file called functions_final.js located in the /static/js/ directory. This file  contains functions and logic for interacting with the charts and handling user interactions.
        
Across the html files, everal external resources are linked, including:

    * The Plotly library (plotly-latest.min.js) for interactive charting capabilities.
    * The jQuery library (jquery-3.6.0.min.js) for simplifying JavaScript interactions.
    * The Bootstrap CSS (bootstrap.min.css) and JavaScript (bootstrap.bundle.min.js) files for styling and UI components.
    * The Leaflet CSS file (leaflet.css) is responsible for styling the map elements.
    * The Leaflet JavaScript file (leaflet.js) contains the core functionality of the Leaflet library, including map creation and interaction, which was what it was used for in this case.

### CSS file creation
     A style.css file was used to:
        * Create a theme for all the pages
        * Stylize the sidebar and sidebar button (used to open and close the sidebar)
        * Style the footer element with a fixed position at the bottom of the page.
        * Design the container element for the frequently asked questions section as well as style the buttons used to open and close the FAQ page body including the hover. And adding content (Unicode characters) after the FAQ page buttons to indicate whether the body is expanded or collapsed.
    


## Data Analysis

* Pull tables from database 
* Created any other necessary tables
* Imported into Javascript through Flask app routes
* Used Flask apps and sqlalchemy to calculate:
    * Most/Least popular per list of all time
    * Most/Least popular per list of most recent
    * Most common publishers per list
    * Statistical calculations

### Visualizations Created and Inserted into Site

* Created charts in javascript using plotly (example below)
    * ![chartimage](https://github.com/StephWolter/GetOnTheList/blob/main/Images/chart_authors.png)
* Created maps in Leaflet to display the addresses of main publisher companies with markups to pinpoint exact locations.
    * Data (names, address and coordinates of publishers) was manually generated and insert into a json file (data.json: located in the /static/js/ directory) then imported in the javascrip file where the map instance was created.

## Website building Pt 2
* Created list of list_names for future use
* Created 2 metadata tables and formatted for readability
* Used plotly to create multiple bar charts
* Used Beautiful Soup to pull styling/data 
    * Wikipedia
* Insert app links into HTML as appropriate
* complete Dropdown menus 
* Smooth out design

## Create Powerpoint of presentation
* Created and designed in Microsoft Powerpoint
* Shared with team and edited in Google Slides.
* Practiced

## Created ReadMe
* Et Voila
















  
