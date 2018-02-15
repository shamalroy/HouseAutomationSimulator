HTML template credit:
https://codepen.io/oknoblich/pen/tfjFl

A JavaScript/jQuery application simulating house automation: pressing a button on a control panel would visually turn on a light, change the temperature or close the curtains.
The application is extensible to add new components easily without changing the base code. It uses directory and file names structure for component resulution. 

Project struture:
–	components/
–	light/
–	config.json
–	template.html
–	temperlight/
–	config.json
–	template.html
–	css/
–	style.css
–	js/
–	house-automation-simulator.js
–	dummy-service/
–	index.html

The index.html is the starting point of the application it loads the jQuery and the home-automation-simulator plugin. It also has the basic HTML containers to hold the templates.
the components folder contains all the componets related files and structured based on componet name.  Each component has its own config.json and template.html file. The config.json has the backend endpoint information for each type of operation. The template.html has the paceholders for the values returned from the server.
js folder contains the home-automation-simulator.js file which is the core of this application. The JS code finds all the input fields and bind the homeSimulator to each input field. Each input represents a component. Based on user interation(click and change event) the plugin loads the server endpoint information and template for a specific action and then loads the data from the endpoint and pass to the render method. In the render methods the the placeholders in the template are replaced by data key/values and rendered in the UI. 

How to add a new component:
Add a new tab and a empty section in the index.html with data attribute, data-component="curtains". Here "curtains" is our component name
<input id="tab3" type="radio" class="tab_input" name="tabs" data-component="curtains">
<label for="tab3">Curtains</label>
<section id="tab3-content"></section>
Now create a folder name “curtains”  under components/  folder. Then add the following config.json and template.html in the folder.
We have to make sure the right endpoints are created with dummy data inside the dummy-service folder. If everything is setup correctly we should see a new tab Curtains in the UI.


