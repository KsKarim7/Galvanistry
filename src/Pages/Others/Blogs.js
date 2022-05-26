import React from 'react';
import { Accordion } from 'react-bootstrap';


const Blogs = () => {
    return (
        <div className='my-5 container'>
            <h2 className='my-5 text-center text-secondary'>Q & A Portal</h2>
            <Accordion >
                <Accordion.Item>
                    <Accordion.Header className='text-3xl'>How does prototypical inheritance work?: Difference between JS and Node.js.</Accordion.Header>
                    <Accordion.Body className='text-xl my-5'>
                        Answer: Difference between Javascript(js) and Node.js is written below:
                        <br />
                        <br />
                        <span className='fw-bold'>Prototypical inheritance</span> :  :
                        Prototypical inheritance means the ability to access objects properties from another object. It is a feature used to add methods and properties in objects in javascript. Javascript is the most common of the prototype capable languages, and its capabilities are relatively unique. Prototypical inheritance in javascript is a powerful tool that can save hours of coding.
                        <br />


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item >
                    <Accordion.Header className='text-3xl'>Question no.2: What is a unit test? Why should write unit tests?</Accordion.Header>
                    <Accordion.Body className='fw-bold text-2xl'>
                        Answer:Unit test is a type of testing technique where  individuals units of a software are tested. In this technique the smallest piece of code that can be logically isolated in a system. It is the first step of functional testing. It is an essential thing for the software development process which is done by the software developers. It helps to find and fix the bugs properly and quickly. It is kind of a way of documenting. Since javascript is a popular programming language. So by using javascript unit test can be done smoothly and correctly. It also necessary to learn how one can perform test in javacript. Unit testing is a method where javascript test code is written for a web page or web application module. There are many types of frameworks which Are helpful for unit testing in javascript. They are : mocha, jest,jasmine,cypress etc

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header className='text-3xl my-8'>Question no.3: Difference between SQL and NoSQL databases?</Accordion.Header>
                    <Accordion.Body className='me-2 text-xl'>
                        Answer:Optimizing performance in a React application:
                        <br />
                        <br />
                        <div>
                            <div className='me-2 text-xl'>

                                <li>While rendering we have to make sure that necessary is only received by the components</li>
                                <li>Unnecessary renderings should be detected </li>
                                <li>SQL databases are better for multi-row transactions.</li>
                                <li>Loading of big size images (which takes lots of time to load)</li>
                                <li>We need to audit and trim our js bundles to eliminate any code redundancy</li>

                            </div>


                        </div>


                    </Accordion.Body>
                </Accordion.Item >
                <Accordion.Item>
                    <Accordion.Header className='text-3xl my-8'>Question no.4:  What are the different ways to manage a state in a React application?</Accordion.Header>
                    <Accordion.Body className='text-2xl'>
                        <p>Answer:In React , a lot of trial and error, pilot programs, and personal observance it has been proven that apps can be structured into 4 types of state . Managing state in  our react app have four different ways.Which are:
                            <div className='me-2 text-xl'>

                                <li>Data State</li>
                                <li>Control State</li>
                                <li>Session State</li>
                                <li>Local state</li>
                            </div>
                            We need to map out identifiers, build hierarchical trees, understand a particular model to sort and identify information in a React app easily.

                        </p>


                    </Accordion.Body>
                </Accordion.Item >
                <Accordion.Item>
                    <Accordion.Header className='text-3xl my-8'>Question no.5: Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</Accordion.Header>
                    <Accordion.Body className='text-2xl'>
                        <p>
                            Answer: We should never update or change value directly in a state. On the other hand, to change the value in the state object to we need to use 'setstate()'. The output of the component will change according to the new values while re-rerendering.
                        </p>


                    </Accordion.Body>
                </Accordion.Item >
            </Accordion>
        </div>
    );
};

export default Blogs;