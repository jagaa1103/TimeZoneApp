export const getTimezone = async (latitude, longitude) => {
    const url = "http://api.timezonedb.com/v2.1/get-time-zone?key=RM9CY6CP2A5P&format=json&by=position&lat=" 
                  +latitude 
                  + "&lng=" 
                  + longitude;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}