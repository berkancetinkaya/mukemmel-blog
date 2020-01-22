import React from "react";
import Header from './partials/Header'
import Footer from './partials/Footer'

const DefaultLayout = (Page) => {
  const Layout = props => appendToLayout(Page, props);
  Layout.getInitialProps = context => wrapInitialProps(context, Page);
  return Layout;
}

async function wrapInitialProps(context, wrappeeComponent) {
  const wrappeeComponentInitalProps = wrappeeComponent.getInitialProps;
  return wrappeeComponentInitalProps ? {... await wrappeeComponentInitalProps(context)} : {};
}

function appendToLayout(Component, props) {
  return (<div style={{maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto'}}>
    <Header />
      <Component {...props}/>
    <Footer/> 
  </div>)
}

export default DefaultLayout;
