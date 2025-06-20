import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-dark-100/80 backdrop-blur-md rounded-2xl shadow-neumorphic p-8 text-center border border-primary-600/20">
            <div className="text-red-400 mb-6 flex justify-center">
              <AlertTriangle className="h-16 w-16" />
            </div>
            
            <h1 className="text-2xl font-poppins font-bold text-primary-300 mb-4">
              Something went wrong
            </h1>
            
            <p className="text-dark-500 font-inter mb-6 leading-relaxed">
              We apologize for the inconvenience. An unexpected error has occurred. 
              Please try refreshing the page or return to the homepage.
            </p>
            
            {this.state.error && (
              <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4 mb-6 text-left">
                <p className="text-red-300 text-sm font-mono">
                  {this.state.error.message}
                </p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRefresh}
                className="bg-primary-600 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-primary-700 transition-colors duration-300 inline-flex items-center justify-center shadow-glow"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Refresh Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="border-2 border-primary-600 text-primary-400 px-6 py-3 rounded-full font-inter font-medium hover:bg-primary-600/10 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;