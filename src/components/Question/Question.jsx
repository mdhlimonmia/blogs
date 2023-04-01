import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='question'>
        <h3>1.What is  the difference between props and state?</h3>
        <p>STATE <br /> State is managed within the component.
State can be changed(mutable) State can be accessed using the use state hooks in functional components and in-class components can be accessed using this.State changes can be asynchronous State is controlled by react components State can used to display changes with the component</p>
        <p>PROPS <br /> Props gets passed to the component Props are read only and cannot be  changed (immutable) Props can be accessed in functional component using props parameter and in-class component, props can the accessed using this.props Props are read only Props are controlled by whoever renders the components Props are used to communicate between components</p>
        <br /> <br />
      <h3>2.How to work useState?</h3>
      <p>The useState() is work by some spates. you must first import it from React, or you will have to append it like React.useState() anytime you have to create a state. <br /> The useState() hook takes in the initial value of the state variable as an argument. This value could be of any data type, such as string, number, object, array, and lots more.</p>
      <p>In the code above, a changeName function is created that will be triggered when the button is clicked. In this function, we changed the firstName.</p>
      <br /> <b></b>

      <h3>3.What does useEffect do other than load data?</h3>
      <p>After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.</p>
      <p></p>
      <br /> <br />
      <h3>4.How to work react?</h3>
      <p>React is a JavaScript library for building user interfaces. Here's a high-level overview of how to work with React:</p>
      <p>Install React and set up your development environment. You'll need Node.js and npm (Node Package Manager) installed on your machine to create a React app.</p>
      <p>Create a new React app using the create-react-app command. This will generate a basic app structure with all the necessary files and configurations.</p>
      <p>Handle user interactions using event handlers. You can define event handlers (like onClick or onChange) to handle user input and update the state of your components.</p>
      </div>
        </div>
    );
};

export default Question;