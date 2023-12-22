import React, {ComponentType, Suspense} from 'react';

const WithSuspense = (SomeComponent: ComponentType) => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <SomeComponent />
        </Suspense>
    );
};

export default WithSuspense;