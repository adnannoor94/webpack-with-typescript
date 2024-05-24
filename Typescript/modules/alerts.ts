import swal from 'sweetalert';

const success = () => {
    swal("Success", "The operation was completed", "success");
}

const failure = () => {
    swal("Oops!", "Something went wrong!", "error");
}

export { success, failure };