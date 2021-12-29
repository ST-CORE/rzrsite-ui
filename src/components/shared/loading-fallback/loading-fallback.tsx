import React from 'react';
import './loading-fallback.scss';

interface LoadingFallbackProps {
    isDataLoaded: boolean;
    children: JSX.Element;
  }
  
  export default ({ isDataLoaded, children }: LoadingFallbackProps) => {
    if(isDataLoaded)
    {
        return (
        <div>
            {children}
        </div>
        )
    }
    else
    {
        return (
        <div className='loading-splashcreen'>
            <span>
                Подождите, загружаем...
            </span>
        </div>
        )
    }
  };