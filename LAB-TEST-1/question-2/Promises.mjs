const resolvedPromise = () => {
    setTimeout(() => {
       let success = {'message': '500ms timeout successful!'}
       console.log(success); 
    }, 500);
}

const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error('Error: 500ms timeout exception');
        } catch (e) {
            console.error(e);
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()