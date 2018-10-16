import React from "react";
import Button from 'react-button-component';
import "./Detail.css";

class Detail_Teacher extends React.Component {
  render() {
    return (
        <body>
        <table>
          <thead>
            <tr>
                <th width="20%">Activity</th>
                <th width="15%">Date</th>
                <th width="15%">Time</th>
                <th>Description</th>
                <th width="15%">Availibity</th>
                <th width="15%">Edit</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>Conversation Cloud </td>
              <td>18 Oct 2018</td>
              <td>13.00-15.00</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </td>
              <td>xx/30</td>
              <td><Button>Edit</Button></td>
            </tr>
            <tr>
              <td>English Club </td>
              <td>18 Oct 2018</td>
              <td>9.00-11.00</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </td>
              <td>xx/30</td>
              <td><Button>Edit</Button></td>
            </tr>
          </tbody>
        </table>
      </body>
      
    );
  }
}

export default Detail_Teacher;