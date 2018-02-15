A JavaScript/jQuery application simulating house automation: pressing a button on a control panel would visually turn on a light, change the temperature or close the curtains.
The application is extensible to add new components easily without changing the base code. It uses directory and file names structure for component resolution. 

## Project struture:
* components/
    * light/
        * config.json
        * template.html
    * temperature/
		* config.json
		* template.html
* css/
	* style.css
* js/
	* house-automation-simulator.js
* dummy-service/
* index.html

1. The index.html is the starting point of the application it loads the jQuery and the home-automation-simulator plugin. It also has the basic HTML containers to hold the template fragments.

2. The components folder contains all the components related files and structured based on the component name.  Each component has its own config.json and template.html file. The config.json has the backend endpoint information for each type of operation. The template.html has the paceholders for the values returned from the server.

3. The js folder contains the home-automation-simulator.js file which is the core of this application. The JS code finds all the input fields and binds the homeSimulator to each input field. Each input represents a component. Based on user interaction(click and change event) the plugin loads the server endpoint information and the template for a specific action and then loads the data from the endpoint and pass to the render method. In the render methods, the placeholders in the template are replaced by data key/values and rendered in the UI. 

## How to add a new component:
* Add a new tab and an empty content section in the index.html with the data attribute, data-component="curtains". In this case "curtains" is our component name.
```html
<input id="tab3" type="radio" class="tab_input" name="tabs" data-component="curtains">
<label for="tab3">Curtains</label>
<section id="tab3-content"></section>
```
* Now create a folder name “curtains”  under components folder. Then add the following config.json and template.html in the folder.

*components/curtains/config.json*
```json
{
  "statusUrl": "dummy-service/curtains/status.json",
  "onUrl": "dummy-service/curtains/on.json",
  "offUrl": "dummy-service/curtains/off.json"
}
```

*components/curtains/template.html*
```html
<h3>Status: {{statusDesc}}</h3>
<br/>
<input type="checkbox" class="switch_1" {{status}}>
```

* We need to make sure the right endpoints are created with dummy data inside the dummy-service folder. If everything is setup correctly we should see a new tab Curtains in the UI.


## HTML template credit
https://codepen.io/oknoblich/pen/tfjFl
