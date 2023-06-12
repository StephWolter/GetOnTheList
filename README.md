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
* The primary data source for the tool is the NYT Books API, whose 'full overview' path (/lists/full-overview.json) provides json information on all books on all bestseller lists for a specified date.
* Given the structured nature of the information obtained from our data source, we elected to use a relational database for the back end.
* Using Postgres, we created a SQL database with the following entity relationship diagram (ERD):
       *  ![ERD](https://github.com/StephWolter/GetOnTheList/blob/main/Images/Website_Brainstorm.png)
* 
* Used api keys to pull data from the NYT Bestseller List
* Created tables and imported data into Postgres
    * ![ERD]()
* Created database access for the team
    * Assigned roles and permissions

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
















  
