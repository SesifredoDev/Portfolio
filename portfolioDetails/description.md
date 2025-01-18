# GitHub Portfolio Explorer

The **GitHub Portfolio Explorer** is a dynamic, user-friendly web application built using **Angular Material** that showcases an individual’s GitHub profile and repositories. This project demonstrates seamless integration with the **GitHub API**, providing users with real-time data and interactive visualizations of their GitHub activity.

Using markdown files as a content builder, and format file structures in my "Portfolio" projects, It allows me to generate the page you are looking at now.



1. **Responsive Design**  
   - Fully responsive interface designed with Angular Material components for a modern, clean, and intuitive user experience.





8. **Error Handling and Feedback**  
   - Gracefully handles API errors, such as rate limits or invalid usernames, with clear error messages.  
   - Displays loading spinners while data is being fetched.

## Technologies Used

- **Frontend Framework**: Angular  
- **UI Components**: Angular Material  
- **API Integration**: GitHub REST API  
- **Styling**: SCSS for customized Angular Material themes  
- **Version Control**: Git  

## Learning Outcomes

This project showcases skills in:  
- Building responsive and accessible UIs with Angular Material.  
- Consuming third-party REST APIs and handling asynchronous data.  
- Implementing client-side search, filtering, and pagination.  
- Visualizing data using modern charting libraries.  
- Writing clean, maintainable, and scalable Angular code.  

The **GitHub Portfolio Explorer** demonstrates proficiency in Angular development and the ability to build visually appealing and data-driven web applications.

# Timeline Slider Component

The **Timeline Slider Component** is an interactive and visually appealing Angular component designed to display a chronological view of projects or events. It enables users to navigate through time with precision and highlights key milestones with dynamic cards and notches. This component is ideal for portfolios, showcasing work history, or tracking project timelines.

## Features

- **Dynamic Timeline Generation**:  
  Automatically calculates and displays time intervals (years and months) based on the input data, ensuring flexibility for varying date ranges.

- **Interactive Cards**:  
  Projects are represented as cards positioned along the timeline. Each card includes:
  - Project name
  - Customizable images (icon or banner)
  - Dynamic highlighting for the active card

- **Smooth Snapping and Navigation**:  
  The timeline ensures that the thumb snaps to the closest year, improving navigation and usability.

- **Responsive Design**:  
  Adapts seamlessly to different screen sizes with optimized layouts for desktop and mobile views.

- **Styling and Animations**:  
  - Glowing highlights for the active card
  - Alternating styles for cards to avoid visual clutter
  - Hover effects for cards and notches

- **Accessibility**:  
  Includes features like `alt` text for images and hover tooltips for additional project details.

## Technical Highlights

- Built using **Angular** with `@Input` properties for data binding.
- Utilizes **absolute positioning** for precise element placement on the timeline.
- Implements **responsive CSS** with media queries for optimal viewing across devices.
- Leverages **TypeScript** to calculate positions dynamically based on project dates.

## How It Works

1. **Input Data**:  
   Accepts an array of project objects, each containing:
   - Name
   - Creation date
   - Last updated date
   - Description
   - Topics
   - Image URLs (banner and icon)

2. **Timeline Generation**:  
   - Calculates total months between the earliest and latest project dates.
   - Generates year and month notches with appropriate positions.

3. **Card Positioning**:  
   - Dynamically calculates card positions along the timeline based on project creation dates.
   - Ensures no overlaps by applying alternating styles and offsets.

4. **User Interaction**:  
   - Allows users to hover over cards for additional details.
   - Highlights the active project card based on user selection or input.

## Technologies Used

- **Frontend**: Angular, TypeScript, SCSS
- **Design**: Custom CSS for styling and animations
- **Data Handling**: Dynamic position calculation using JavaScript date functions


## Use Cases

- Portfolios: Showcase a professional timeline of projects and achievements.
- Product Roadmaps: Visualize key milestones and updates over time.
- Event Histories: Highlight significant dates and events interactively.


This component highlights attention to detail, interactivity, and responsiveness, making it a valuable addition to your portfolio.