import React, { Component } from 'react'
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

export class ErrorBoundaryDemo extends Component {

	render() {
			return (
                <div>
                    <ErrorBoundary> <Hero heroName="batman"/></ErrorBoundary>
                    <ErrorBoundary><Hero heroName="superman"/></ErrorBoundary>
                    <ErrorBoundary><Hero heroName="Joker"/></ErrorBoundary>      
                </div>
            )
	}
}

export default ErrorBoundaryDemo