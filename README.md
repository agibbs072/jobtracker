# Jobtracker

Jobtracker is a single page application that allows users to maintain a list of jobs they apply for.

# How it works

The frontend uses react for views and redux to maintain the state for job options as well as the list of user entered 
jobs. It also uses styled components and responsive web design for the page. Each time the user creates a new job, the
job is inserted into the job state and into local storage. The table is populated by reading the job state and the user
is able to keep their table after closing the window because it is also saved in local storage. The application is 
"over engineered" but the purpose is to explore the frontend ecosystem and demonstrate skill with various web 
technologies.

# Roadmap

future iterations of jobtracker will implement the following:
* React Testing Library / Jest
* User accounts
* postgresql tables to store jobs for user accounts
