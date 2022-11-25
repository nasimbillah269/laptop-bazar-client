import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
            <div>
                <h2 className='text-xl font-bold'>1. What are the different ways to manage a state in a React application</h2>
                <p>But thanks to state, React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.
                    It's important to mention that not all components in a React app must have state. There are stateless components as well which just render its content without the need to store any information, and that's just fine
                    Another important thing to mention is that state change is one of the two things that make a React component re-render (the other is a change in props). In this way, the state stores information about the component and also controls its behavior.
                </p>
            </div>
            <div className='mt-4'>
                <h2 className='text-xl font-bold'>2. How does prototypical inheritance work</h2>
                <p>Every object with its methods and properties contains an internal and hidden property known as The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using</p>
            </div>
            <div className='mt-4'>
                <h2 className='text-xl font-bold'>3. What is a unit test? Why should we write unit tests</h2>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
            </div>
            <div className='mt-4'>
                <h2 className='text-xl font-bold'> 4. React vs. Angular vs. Vue</h2>
                <p>If the choice youre making is based on Angular vs React alone, then  simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                    React often requires extra modules and components, which keeps the core library small, but means theres extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesnt require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                    React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript The choice between React vs Vue is often debated and its not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so theres no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                    Overall, Vue might be the best choice if youre a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                    In most cases, you probably wouldnt be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.</p>
            </div>
        </div>
    );
};

export default Blog;