import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blog = () => {
    return (
        <div className='mt-4 mb-5'>
            <PageTitle title='Blog'></PageTitle>
            <h2 className='container text-start'>Blog</h2>
            <h4 className='container text-start mt-5'>Question: What is the difference between javascript and nodejs?</h4>
            <p className='container text-start'>1.Javascript is a programming language that is used for writing scripts on the website.
                NodeJS is a Javascript runtime environment. <br />
                2.	Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS. <br />
                3.	It is basically used on the client-side.	It is mostly used on the server-side. <br />
                4.	Javascript is capable enough to add HTML and play with the DOM.
                Nodejs does not have capability to add HTML tags. <br />
                5.	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                6.	Javascript is used in frontend development.	Nodejs is used in server-side development. <br />
                7.	Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. <br />

                8.	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                Nodejs is written in C, C++ and Javascript.</p>
            <h4 className='container text-start mt-5'>Question: When should you use nodejs and when should you use mongodb?</h4>
            <p className='container text-start'>When you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.</p>
            <h4 className='container text-start mt-5'>Question: What is the purpose of jwt and how does it work?</h4>
            <p className='container text-start'>In short, JWTs are used as a secure way to authenticate users and share information.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            <h4 className='container text-start mt-5'>Question: What is the difference between javascript and nodejs?</h4>
            <p className='container text-start'>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.</p>

        </div>
    );
};

export default Blog;