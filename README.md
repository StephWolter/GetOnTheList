# Project 3
# Use tools learned and skills gained through the past 6 modules to work as a team for Project 3.

## Team
* Rob Cortes
* Fatou Gai
* Stephanie Wolter

# Get On The List
* How does an author get on any of the NYT Bestseller lists? Is it hard? Is it about merit? Money? Marketing?
**lots more summary**

## SetUp

* Repository: [Get On The List](https://github.com/StephWolter/GetOnTheList.git)

* File Structure:

        * Data Extraction           # Main folder for data
            * CSVs                  # Main folder for csv
                * Ownership_v2.csv  
                * Publishers.csv
                * authors.csv
                * books.csv
                * imprints.csv
                * lists.csv
                * ownership.csv
                * results.csv
            * Insert_NYT_Data.ipynb
            * api_keys.py
            * local_postgres.py
            * schema.sql
        * Images
            * Logos
            * Memes
        * PublishingHouses.xlsx
        * ReadMe.md

* Final Website: [Get On The List]()

* Presentation in Google Slides: [Get On The List](https://docs.google.com/presentation/d/1gQKRitfOxRw1ZQLOcBUpYoVPGTOzSaYite_0RqtkBIM/edit?usp=sharing)

## Step 1: Setting Up
### Conceptualization
* Piggy backing off work from Project 1
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
* The [Insert_NYT_Data.ipynb](/data_crud/Insert_NYT_Data.ipynb) script imports psql_connect.py, makes API calls, and inserts the responses into the database.
### Manual Data Insertion
* The responses from the NYT Books API are NOT by themselves sufficient to populate the entire database. This is because the NYT data only contains imprint-level publishing information.
       * For example, many Colleen Hoover books are published by Atria, an imprint of Simon & Schuster. The NYT API only shows Atria as the publisher of the Colleen Hoover books. It does not reveal that Atria is an imprint owned by a larger publishing house.   
* The ownership table is a crosswalk that captures the relationship between publishers and any imprints they own.
* We are not aware of any automated data services that disclose ownership information in the publishing industry. Therefore, the ownership table and publishers table were populated manually.   

## Website building Pt 1
* HTML design created ready for data population


## Data Analysis

* Pull tables from database 
* Created any other necessary tables
* Imported into Javascript
* Used Flask apps and sqlalchemy to calculate:
    * Most/Least popular per list of all time
    * Most/Least popular per list of most recent
    * Most common publishers per list
    * Statistical calculations

### Visualizations Created and Inserted into Site
* Used j-query library for enhanced maps of publisher
* Created charts in javascript using plotly
    * [chartimage]()
* Created charts in tableau
    * [chartimage]()
* Created maps in Leaflet
    * [chartimage]()

## Website building Pt 2
* Insert app links into HTML as appropriate
* complete Dropdown menus 
* Smooth out design

## Create Powerpoint of presentation
* Practiced

## Created ReadMe
* Et Voila
















  
