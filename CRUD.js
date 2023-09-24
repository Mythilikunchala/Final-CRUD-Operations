import React, { useState, useEffect, Fragment } from "react";
import { format } from "date-fns";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomContainer from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, CloseButton } from 'react-bootstrap'; // Import the necessary componentsss

import axios from "axios";
import './style.css';

const CustomToastContainer = ({ toastClassName, bodyClassName, children }) => (
  <div className={toastClassName}>
    <div className={bodyClassName}>
      {children}
    </div>
  </div>
);

const CRUD = () => {
  // test commit
  
  //test commit 1
  // const validateFields = () => {
  //   if (ID!=='' && name !== '' && gender !== '' && address !== '' && phone !== '' && selectedDate !== null) {
  //     setIsSubmitButtonDisabled(false);
  //   } else {
  //     setIsSubmitButtonDisabled(true);
  //   }
  // };
  //handleSelection(employeeIdToDelete);
  const handleDeleteClick = (employeeId,employeeName) => {
    setEmployeeIdToDelete(employeeId);// Set the ID of the employee to delete
    setEmployeeNameToDelete(employeeName); // Set the name of the employee for display
    setIsDeleteModalOpen(true);// Open the delete confirmation modal
  };
  //const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  

  const isIdAlreadyExists = (id) => {
    return data.some((item) => item.ID === id);
  };

  const handleNameChange = (e) => {
    SetName(e.target.value);
    //validateFields();
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    //validateFields();
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
   // validateFields();
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    //validateFields();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    //validateFields();
  };
  // Declare error variables
  // Remove the unused variable declaration
  const [employeeNameToDelete, setEmployeeNameToDelete] = useState('');
  const [address, setAddress] = useState('');
  const [isDataDeleted, setIsDataDeleted] = useState(false); // Track whether data is deleted
  const [errorMessage, setErrorMessage] = useState('');
const [namelengthError, setNamelengthError] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [nameError, setNameError] = useState('');
  //const [genderError, setGenderError] = useState('');
  //const [addressError, setAddressError] = useState('');
  //const [phoneError, setPhoneError] = useState('');
  const [selectedDateError, setSelectedDateError] = useState('');

  // Declare edit mode and edit-related variables
  //const [editMode, setEditMode] = useState(false);
  const [Editname, SetEditName] = useState('');
  //const [name, setName] = useState(''); // State for normal mode
 
  //const [address, setAddress] = useState('');
  const [data, setData] = useState([]);
  const [editEmployeeData, setEditEmployeeData] = useState(null);

  const [editId, SetEditId] = useState('');
  
  const [editName, setEditName] = useState(''); // State for mod/al (edit) mode
  const [EditPhone,SetEditPhone]=useState('');
  //const [EditId,SetEditId]=useState('');
  const [editAge, setEditAge] = useState('');
   //const [editPhone,SetEditPhone]=useState('');
  const[dob,setEditDob]=useState('');
  const[Gender,setEditGender]=useState('');
  const[editTrimmedAddress,setEditTrimmedAddress]=useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const [editNameError, setEditNameError] = useState('');
  const [editIdError, setEditIdError] = useState('');
  const [editPhoneError, setEditPhoneError] = useState('');
  const [editDobError, setEditDobError] = useState('');
  const [editGenderError, setEditGenderError] = useState('');
  const [editAddressError, setEditAddressError] = useState('');
  const [editNameLengthError, setEditNameLengthError] = useState('');
  //cosnt [nameLengthError, setNameLengthError]=useState('');
  const [employees, setEmployees] = useState([]);
 // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isDOBValid, setIsDOBValid] = useState(true);
  const [date, setDate] = useState(new Date());
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [addressError, setAddressError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const formattedDate1 = selectedDate1 ? format(selectedDate1, "yyyy-MM-dd") : null;
  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : null;
  const [phoneError, setPhoneError] = useState('');
  const [trimmedAddress, setTrimmedAddress] = useState('');
  // const [EditPhone, SetEditPhone] = useState('');
 
  const [phone, setPhone] = useState('');
  //const [dob, setDob] = useState('');
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ID, SetID] = useState('');
  const [name, SetName] = useState('');
  const [Age, SetAge] = useState('');
  
  //const [Editname, SetEditName] = useState('');
  const [EditAddress, SetEditAddress] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [Editgender, SetEditGender] = useState('');
  const [EditAge, SetEditAge] = useState('');
  const [Editdob, SetEditDob] = useState('');
  //const [data, SetData] = useState([]);
  const [isActive, SetIsActive] = useState('0');
  const [searchResult, setSearchResult] = useState(true);
  const [idErrorMessage, setIdErrorMessage] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  //const [employeeIdToDelete, setEmployeeIdToDelete] = useState(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [employeeIdToDelete, setEmployeeIdToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditMoalOpen,setIsEditModalOpen]=useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  
  
  const phonePattern = /^[0-9]{10}$/;

  const fetchData = () => {
    // Fetch data on page load without checking the employeeId
    axios.get('https://localhost:7113/api/Employee')
      .then((result) => {
        setData(result.data);
        setError(null);
        setSearchResult(true);
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred while fetching data.");
        setSearchResult(true);
      });
  };
  const handleEditClick = (item) => {
    // Set the selected row data and show the popup
    setSelectedRowData(item);
    setShowPopup(true);
  };

  //const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();


  // Filter the data based on the search term
  const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setNoDataAvailable(filteredData.length === 0);
    
    // Update the "searchTerm" state
    setSearchTerm(searchTerm);
  };



  
  const handleEmployeeIdChange = (e) => {
    const id = e.target.value;
    setEmployeeId(id);
    //validateFields(); // Call validateFields to perform validation for the employee ID field
  };
  

  // useEffect to fetch data on page load without checking the employeeId
  useEffect(() => {
    fetchData();
  }, []);

  // const handleEditClick = (employeeId) => {
  //   setEditNameError('');
  //   setEditPhoneError('');
  //   setEditDobError('');
  //   setEditGenderError('');
  //   setEditAddressError('');
    
  //   // Fetch the data of the selected employee using an API call
  //   axios.get(`https://localhost:7113/api/Employee/Exists/${employeeId}`)
  //     .then((response) => {
  //       const employeeData = response.data;
  //       // Set the state variables with the fetched data
  //       setEditName(employeeData.name);
  //       setEditAge(employeeData.age);
  //       setEditId(employeeData.id);
  //       SetEditPhone(employeeData.phone);
  //       setEditGender(employeeData.Gender);
  //       setEditAge(employeeData.dob);
  //       setEditTrimmedAddress(employeeData.address);
  //       // Set other state variables with corresponding data
  //       // ...
  //       // Open the edit modal
  //       setIsEditMode(true);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occur during the API call
  //       console.error('Error fetching employee data:', error);
  //     });
  // };
  

 const handleDeleteConfirm = () => {
  if (employeeIdToDelete !== null) {
    // Close the delete confirmation modal first
    setIsDeleteModalOpen(false);

    axios
      .delete(`https://localhost:7113/api/Employee/${employeeIdToDelete}`)
      .then((response) => {
        // Handle the successful deletion response
        console.log('Employee deleted:', response.data);
        // Optionally, you can update your UI or perform any other actions after successful deletion

        // Reset the employeeIdToDelete
        setEmployeeIdToDelete(null);
        toast.success('Employee details has been deleted');
        // Fetch updated data
        fetchData();
      })
      .catch((error) => {
        // Handle any errors that occur during the DELETE request
        console.error('Error deleting employee:', error);
        // Optionally, you can display an error message or perform error handling here
      });
  }
};


  const validateName = (inputName) => {
    
    if (!/^[A-Za-z\s]+$/.test(inputName)) {
      return 'Please enter a valid Name.';
    } else if (inputName.length > 50) {
      return 'Name should not exceed 50 characters.';
    } else {
      return ''; // No error
    }
  };
  const validatePhone = (inputPhone) => {
    if (inputPhone.length === 0) {
      return 'Contact no is required.';
    } else if (!/^\d+$/.test(inputPhone)) {
      return 'Please enter a valid phone no.';
    } else if (inputPhone.length > 10) {
      return 'Please enter a valid 10 digit phone no.';
    } 
  };
  const validateId = (inputId) => {
    if (inputId.length === 0) {
      return 'ID is required.';
    } else if (!/^\d+$/.test(inputId)) {
      return 'Please enter a valid ID with numbers only.';
    } else {
      return ''; // No error
    }
  };
  
  // In your component, you can use this function to validate the ID field:
  
 
  
//   const handleEditClick = (employeeId) => {
//     setEditNameError('');
//     setEditPhoneError('');
//     setEditDobError('');
//     setEditGenderError('');
//     setEditAddressError('');
  
//     // Check if the employee exists by their ID
//     axios
//       .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`)
//       .then((response) => {
//         if (response.data === true) {
//           // The employee exists, proceed with fetching their data for editing
  
//           // Open the edit popup
//           handleShow();
//           setIsEditMode(true);
  
//           // Fetch employee data for editing
//           axios
//             .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`, {
//               headers: {
//                 'accept': 'text/plain'
//               }
//             })
//             .then((response) => {
//               console.log('Employee exists:', response.data);
//               // Retrieve employee data from the response
//               const employeeData = response.data;
  
//               // Set the state variables with the retrieved data
//               setEditName(employeeData.name)
//               setEditAge(employeeData.age);
//               SetEditPhone(employeeData.phone);
              
//               // Check if address is not null before trimming
//               if (employeeData.address !== null) {
//                 SetEditAddress(employeeData.address);
//                 setTrimmedAddress(employeeData.address.trim());
//               } else {
//                 SetEditAddress('');
//                 setTrimmedAddress('');
//               }
  
//               // Handle gender
//               const trimmedGender = employeeData.gender.trim();
//               if (trimmedGender === "Other") {
//                 setEditGender("Other");
//               } else {
//                 setEditGender(trimmedGender);
//               }
  
//               // Handle date of birth
//               const dateFromBackend = employeeData.dob;
//               const parsedDate = new Date(dateFromBackend);
//               const correctedDate = new Date(
//                 parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000
//               );
//               setSelectedDate(correctedDate);
  
//               // Set other fields as needed
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         } else {
//           // The employee with the given ID does not exist
//           // You can show an error message or handle it as needed
//           console.log("Employee does not exist with ID:", employeeId);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// };
// const handleEditClick = (employeeId) => {
//   setEditNameError('');
//   setEditPhoneError('');
//   setEditDobError('');
//   setEditGenderError('');
//   setEditAddressError('');

//   // Check if the employee exists by their ID
//   axios
//     .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`)
//     .then((response) => {
//       if (response.data === true) {
//         // The employee exists, proceed with fetching their data for editing

//         // Open the edit popup
//         handleShow();
//         setIsEditMode(true);

//         // Fetch employee data for editing
//         axios
//           .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`, {
//             headers: {
//               'accept': 'text/plain'
//             }
//           })
//           .then((response) => {
//             console.log('Employee exists:', response.data);
//             // Retrieve employee data from the response
//             const employeeData = response.data;

//             // Set the state variables with the retrieved data
//             setEditName(employeeData.name || ''); // Provide a default empty string
//             setEditAge(employeeData.age || ''); // Provide a default empty string
//             SetEditPhone(employeeData.phone || ''); // Provide a default empty string
            
//             // Check if address is not null before trimming
//             if (employeeData.address !== null) {
//               SetEditAddress(employeeData.address);
//               setTrimmedAddress(employeeData.address.trim());
//             } else {
//               SetEditAddress('');
//               setTrimmedAddress('');
//             }

//             // Handle gender
//             const trimmedGender = (employeeData.gender || '').trim(); // Provide a default empty string
//             if (trimmedGender === "Other") {
//               setEditGender("Other");
//             } else {
//               setEditGender(trimmedGender);
//             }

//             // Handle date of birth
//             const dateFromBackend = employeeData.dob;
//             const parsedDate = new Date(dateFromBackend);
//             const correctedDate = new Date(
//               parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000
//             );
//             setSelectedDate(correctedDate);

//             // Set other fields as needed
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         // The employee with the given ID does not exist
//         // You can show an error message or handle it as needed
//         console.log("Employee does not exist with ID:", employeeId);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// const handleEditClick = (employeeId) => {
//   setEditNameError('');
//   setEditPhoneError('');
//   setEditDobError('');
//   setEditGenderError('');
//   setEditAddressError('');

//   // Check if the employee exists by their ID
//   axios
//     .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`)
//     .then((response) => {
//       if (response.data === true) {
//         // The employee exists, proceed with fetching their data for editing

//         // Open the edit popup
//         handleShow();
//         setIsEditMode(true);

//         // Fetch employee data for editing
//         axios
//           .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`, {
//             headers: {
//               accept: 'application/json', // Update this based on your API response type
//             },
//           })
//           .then((response) => {
//             console.log('Employee exists:', response.data);
//             // Retrieve employee data from the response
//                       // Log the ID and other fields
//             console.log('ID:', response.data.id);
//             console.log('Name:', response.data.name);
//             console.log('Phone:', response.data.phone);
//             console.log('DOB:', response.data.dob);
//             console.log('Gender:', response.data.gender);
//             console.log('Address:', response.data.address);
//             const employeeData = response.data;

//             // Set the state variables with the retrieved data
//             SetID(employeeData.id); // Assuming this is the ID field
//             setEditName(employeeData.name);
//             setEditAge(employeeData.age);
//             SetEditPhone(employeeData.phone);

//             // Handle gender
//             const genderFromBackend = employeeData.gender;
//             if (typeof genderFromBackend === 'string') {
//               const trimmedGender = genderFromBackend.trim();
//               if (trimmedGender === 'Other') {
//                 setEditGender('Other');
//               } else {
//                 setEditGender(trimmedGender);
//               }
//             } else {
//               // Handle the case where gender is not a string (undefined or null)
//               setEditGender(''); // Set it to an appropriate default value or handle it as needed
//             }

//             // Handle date of birth
//             const dateFromBackend = employeeData.dob;
//             if (dateFromBackend) {
//               const parsedDate = new Date(dateFromBackend);
//               if (!isNaN(parsedDate.getTime())) {
//                 const correctedDate = new Date(
//                   parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000
//                 );
//                 setSelectedDate(correctedDate);
//               } else {
//                 // Handle invalid date format or value
//                 // You can set a default date or show an error message
//                 setSelectedDate(new Date()); // Set a default date, or handle it as needed
//               }
//             } else {
//               // Handle the case where dateFromBackend is undefined or null
//               // You can set a default date or show an error message
//               setSelectedDate(new Date()); // Set a default date, or handle it as needed
//             }
//             // Handle address (assuming address is a string)
//             const addressFromBackend = employeeData.address;
//             if (typeof addressFromBackend === 'string') {
//               const trimmedAddress = addressFromBackend.trim();
//               SetEditAddress(trimmedAddress);
//             } else {
//               // Handle the case where address is not a string (undefined or null)
//               SetEditAddress(''); // Set it to an appropriate default value or handle it as needed
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         // The employee with the given ID does not exist
//         // You can show an error message or handle it as needed
//         console.log('Employee does not exist with ID:', employeeId);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// const handleEditClick = (employeeId) => {
//   console.log('Clicked Edit with employeeId:', employeeId);

//   setEditNameError('');
//   setEditPhoneError('');
//   setEditDobError('');
//   setEditGenderError('');
//   setEditAddressError('');

//   // Check if the employee exists by their ID
//   axios
//     .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`)
//     .then((response) => {
//       if (response.data === true) {
//         // The employee exists, proceed with fetching their data for editing

//         // Open the edit popup
//         handleShow();
//         setIsEditModalOpen(true);

//         // Fetch employee data for editing
//         axios
//           .get(`https://localhost:7113/api/Employee/Exists/${employeeId}`)
//           .then((response) => {
//             console.log('Employee exists:', response.data);
//             // Retrieve employee data from the response
//             const employeeData = response.data;

//             // Set the state variables with the retrieved data
//             SetID(employeeData.id); // Assuming this is the ID field
//             setEditName(employeeData.name);
//             setEditAge(employeeData.age);
//             SetEditPhone(employeeData.phone);

//             // Handle gender
//             const genderFromBackend = employeeData.gender;
//             if (typeof genderFromBackend === 'string') {
//               const trimmedGender = genderFromBackend.trim();
//               if (trimmedGender === 'Other') {
//                 setEditGender('Other');
//               } else {
//                 setEditGender(trimmedGender);
//               }
//             } else {
//               // Handle the case where gender is not a string (undefined or null)
//               setEditGender(''); // Set it to an appropriate default value or handle it as needed
//             }

//             // Handle date of birth
//             const dateFromBackend = employeeData.dob;
//             if (dateFromBackend) {
//               const parsedDate = new Date(dateFromBackend);
//               if (!isNaN(parsedDate.getTime())) {
//                 const correctedDate = new Date(
//                   parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000
//                 );
//                 setSelectedDate(correctedDate);
//               } else {
//                 // Handle invalid date format or value
//                 // You can set a default date or show an error message
//                 setSelectedDate(new Date()); // Set a default date, or handle it as needed
//               }
//             } else {
//               // Handle the case where dateFromBackend is undefined or null
//               // You can set a default date or show an error message
//               setSelectedDate(new Date()); // Set a default date, or handle it as needed
//             }
//             // Handle address (assuming address is a string)
//             const addressFromBackend = employeeData.address;
//             if (typeof addressFromBackend === 'string') {
//               const trimmedAddress = addressFromBackend.trim();
//               SetEditAddress(trimmedAddress);
//             } else {
//               // Handle the case where address is not a string (undefined or null)
//               SetEditAddress(''); // Set it to an appropriate default value or handle it as needed
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         // The employee with the given ID does not exist
//         // You can show an error message or handle it as needed
//         console.log('Employee does not exist with ID:', employeeId);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


  const clear = () => {
    SetName(''); 
    SetAge('');
    SetID('');
    setEditName('');
    SetEditAge('');
    SetEditAddress('');
    SetEditId('');
    setPhone('');
    setAddress('');
    setAddressError('');
    setGender('');
    setTrimmedAddress('');
    setEditGender('');
    setSelectedDate(null); // Reset the date picker to null
    SetIsActive('0');
  };
  
  // const handleUpdate = () => {
  //   const SetEditGender = (selectedGender) => {
  //     console.log("Selected Gender:", selectedGender);
  //   };

  //   if (!/^[A-Za-z\s]+$/.test(Editname)) {
  //     toast.error('Please enter a valid Name.');
  //     return;
  //   }

  //   if (!Editname) {
  //     toast.error('Please enter a Name.');
  //     return;
  //   }

  //   const trimmedEditPhone = EditPhone.trim();
  //   if (!/^\d+$/.test(trimmedEditPhone)) {
  //     toast.error('Please enter a valid Phone number.');
  //     return;
  //   }

  //   if (!["Male", "Female", "Other"].includes(Editgender)) {
  //     toast.error('Please select a valid Gender.');
  //     return;
  //   }

  //   const trimmedEditAddress = EditAddress.trim();
  //   const url = `https://localhost:7113/api/Employee/${EditId}`;

  //   const dob = selectedDate ? selectedDate.toISOString() : null;
  //   const data = 
  //   {
  //     id: EditId,
  //     name: Editname,
  //     gender: Editgender,
  //     address: trimmedEditAddress,
  //     phone: trimmedEditPhone,
  //     dob:dob,
  //     isActive:isActive==='1'?1:0
  //   };

  //   axios.put(url, data)
  //     .then((result) => {
  //       getdata();
  //       clear();
  //       toast.success('Employee has been updated');
  //       setShow(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const handleUpdate = () => {
    //console.log(`Fetching data for employee ID: ${employeeId}`);
    // Initialize error state variables
    let nameError = '';
    let phoneError = '';
    let namelengthError='';
    let dobError = '';
    let genderError = '';
    let addressError = '';
    setEditNameError('');
  setEditNameLengthError('');
  setEditPhoneError('');
  setEditDobError('');
  setEditGenderError('');
  setEditAddressError('');
    if (Editname.length > 50) {
      setEditNameLengthError('Name cannot exceed 50 characters.');
      return;
    } else {
      setEditNameLengthError(''); // Clear the error message if the name is within the limit
    }
    
    const trimmedAddress = EditAddress.trim();
if (trimmedAddress === '') {
  setEditAddressError('Please enter an address.'); // Set the error message if the trimmed address is empty
  return;
} else {
  setEditAddressError(''); // Clear the error message if the address is not empty
}

    const trimmedEditAddress = EditAddress.trim();
    if (trimmedEditAddress === '') {
      setEditAddressError('Please enter an address.');
      return;
    } else {
      setEditAddressError(''); // Clear the error message if the address is not empty
    }
    // Validate Name field
    if (!/^[A-Za-z\s]+$/.test(Editname)) {
      nameError = 'Please enter a valid Name.';
    }
  
    // Validate Phone field
    const trimmedEditPhone = EditPhone.trim();
    if (!/^\d+$/.test(trimmedEditPhone)) {
      phoneError = 'Please enter a valid Phone number.';
    }
  
    // Validate Gender field
    if (!["Male", "Female", "Other"].includes(Editgender)) {
      genderError = 'Please select a valid Gender.';
    }
  
    // Validate other fields as needed
  
    // Check if any validation error occurred
    if (nameError || phoneError || dobError || genderError || addressError) {
      // Update error state variables
      setEditNameError(nameError);
      setEditPhoneError(phoneError);
      setEditDobError(dobError);
      setEditGenderError(genderError);
      setEditAddressError(addressError);
  
      // Return early, don't proceed with the update
      return;
    }
  
    // All validations passed, proceed with the update logic
   // const trimmedEditAddress = EditAddress.trim();
    const url = `https://localhost:7113/api/Employee/${employeeId}`;
    const dob = selectedDate ? selectedDate.toISOString() : null;
  
    const data = {
      id: editId,
      name: Editname,
      gender: Editgender,
      address: trimmedEditAddress,
      phone: trimmedEditPhone,
      dob: dob,
      isActive: isActive === '1' ? 1 : 0,
    };
  
    axios.put(url, data)
      .then((result) => {
        fetchData();
        clear();
        toast.success('Employee has been updated');
        setShow(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSave = () => {
    // Clear any previous error messages
    setIdErrorMessage('');
    setErrorMessage('');
  
    // Trim address
    const trimmedAddress = address.trim();
    setTrimmedAddress(trimmedAddress);
  
    // Check if the ID already exists in the database
    const urlCheckId = `https://localhost:7113/api/Employee/Exists/${ID}`;
  
    axios
      .get(urlCheckId)
      .then((response) => {
        if (response.data === true) {
          // ID already exists in the database
          toast.error('An employee with the same ID already exists. Please choose a different ID.');
        } else {
          // ID is unique, proceed with the POST request
          const url = 'https://localhost:7113/api/Employee';
  
          const data = {
            ID: ID,
            name: name,
            gender: gender,
            address: trimmedAddress,
            phone: phone,
            dob: formattedDate,
            isActive: isActive === '1' ? 1 : 0,
          };
  
          axios
            .post(url, data)
            .then((response) => {
              if (response.data === true) {
                // Employee added successfully
                fetchData(); // You can update your data here if needed
                clear();
                toast.success('Employee details has been added');
                setIsSubmitButtonDisabled(true);
              } else {
                // Handle the case where the POST request failed
                setIdErrorMessage('An error occurred while processing your request.');
              }
            })
            .catch((error) => {
              // Handle Axios POST request error
              console.error(error);
              setIdErrorMessage('An error occurred while processing your request.');
            });
        }
      })
      .catch((error) => {
        // Handle Axios GET request error
        console.error(error);
        setIdErrorMessage('An error occurred while checking employee existence.');
      });
  };
  

  // const handleSave = () => {
  //   // Clear any previous error message
  //   setErrorMessage('');
  //   console.log('Address before trimming:', address);
  //   const trimmedAddress = address.trim();
  //   setTrimmedAddress(trimmedAddress);
  
  //   console.log('Trimmed Address:', trimmedAddress);
  //   console.log('Employee ID:', ID);
  //   console.log('Name:', name);
  //   console.log('Gender:', gender);
  //   console.log('Address:', trimmedAddress);
  //   console.log('Phone:', phone);
  //   console.log('Age:', Age);
  //   console.log('Date of Birth:', formattedDate);
  //   console.log('Is Active:', isActive);
  
  //   // Validate each field
  
  //   // Check if the ID already exists in the database
  //   const urlCheckId = `https://localhost:7113/api/Employee/Exists/${ID}`;
  //   axios
  //     .get(urlCheckId)
  //     .then((response) => {
  //       if (response.data === true) {
  //         // ID already exists in the database
  //         toast.error('An emplo yee with the same ID already exists. Please choose a different ID.');
  //       } else {
  //         // ID is unique, proceed with the POST request
  //         const url = 'https://localhost:7113/api/Employee';
  //         const trimmedAddress = address.trim();
  
  //         const data = {
  //           ID: employeeId,
  //           name: name,
  //           gender: gender,
  //           address: trimmedAddress,
  //           phone: phone,
  //           dob: formattedDate,
  //           isActive: isActive === '1' ? 1 : 0,
  //         };
  //         axios
  //           .post(url, data)
  //           .then((response) => {
  //             if (response.data === true) {
  //               // Employee added successfully
  //               fetchData();
  //               clear();
  //               toast.success('Employee has been added');
  //               setIsSubmitButtonDisabled(true);
  //             } else {
  //               // Handle the case where the POST request failed
  //               setIdErrorMessage('An error occurred while processing your request.');
  //             }
  //           })
  //           .catch((error) => {
  //             // Handle Axios POST request error
  //             console.error(error);
  //             setIdErrorMessage('An error occurred while processing your request.');
  //           });
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle Axios GET request error
  //       console.error(error);
  //       setIdErrorMessage('An error occurred while checking employee existence.');
  //     });
  // };
  
  
   
  return (
    <Fragment>
      

      <ToastContainer />
      <Container>
       <h5><center><font color='red'>Enter Employee details:</font></center></h5>
        <div>
          <Row>
            <Col md={2}>
              <Form.Label><b><font color="red"> *ID:</font></b></Form.Label>
             
  <Form.Control
    type="text"
    placeholder="Enter ID"
    value={ID}
    onChange={(e) => {
      const inputId = e.target.value;
      SetID(inputId);
      const error = validateId(inputId);
      setIdErrorMessage(error);
    }}
      />
{idErrorMessage && <div className="error-message">{idErrorMessage}</div>}

       </Col>
          </Row>
          <Row>
            <Col md={2} className="form-group">
              <Form.Label><b><font color="red"> *Name:</font></b></Form.Label>&nbsp;
              {/* <input
                type="text"
                className="form-control" placeholder="Enter Name" value={name} onChange={(e) => { SetName(e.target.value); validateFields(); }}
              /> */}
{/* <Form.Control
  type="text"
  placeholder="Enter Name"
  value={editMode ? Editname : name}
  onChange={(e) => {
    const inputName = e.target.value;
    console.log("Name:", inputName);

    if (inputName.length === 0) {
      setEditNameError('');
      if (editMode) {
        SetEditName('');
      } else {
        SetName('');
      }
    } else if (!/^[A-Za-z\s]+$/.test(inputName)) {
      setEditNameError('Please enter a valid Name.');
      if (editMode) {
        SetEditName(inputName);
      } else {
        SetName(inputName);
      }
    } else {
      setEditNameError('');
      if (editMode) {
        SetEditName(inputName);
      } else {
        SetName(inputName);
      }
    }

    if (inputName.length > 50) {
      setEditNameLengthError('Name should not exceed 50 characters.');
      if (editMode) {
        SetEditName(inputName.substring(0, 50));
      } else {
        SetName(inputName.substring(0, 50));
      }
    } else {
      setEditNameLengthError('');
    }
  }}
/>
{editMode ? editNameError : nameError && <div className="error-message">{editMode ? editNameError : nameError}</div>}
{/*{editMode ? editNameLengthError : nameLengthError && <div className="error-message">{editMode ? editNameLengthError : nameLengthError}</div>}
*/} 
{/* Normal mode input field */}
<input
  type="text"
  placeholder="Enter Name"
  value={name}
  onChange={(e) => {
    const inputName = e.target.value;
    SetName(inputName);
    const error = validateName(inputName);
    setNameError(error);
  }}
/>
{nameError && <div className="error-message">{nameError}</div>}

{/* Edit mode input field */}


            </Col>
          </Row>
          <Row>
            <Col md={2} className="form-group">
              <Form.Label><b><font color="red">*Phone:</font></b></Form.Label>&nbsp;
              <input
  type="text"
  placeholder="Enter Phone"
  value={phone}
  onChange={(e) => {
    const inputPhone = e.target.value;
    setPhone(inputPhone);
    const error = validatePhone(inputPhone);
    setPhoneError(error);
  }}
/>
{phoneError && <div className="error-message">{phoneError}</div>}
            </Col>
          </Row>
          
          <Row>
            <Col md={2} className="form-group">
              <Form.Label><b><font color="red">* DOB:</font></b></Form.Label>            
              <DatePicker 
                selected={selectedDate} 
                onChange={date => {setSelectedDate(date); }}   dateFormat="yyyy/MM/dd" 
                isClearable  placeholderText="Select DOB"  />
            </Col>
          </Row>
          <Row>
            <Col md={2} className="form-group">
              <Form.Label><b>Gender:</b></Form.Label>
              <Form.Control
                as="select"
                value={gender}
                onChange={(e) => {setGender(e.target.value);}}
                className="form-control"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
              {genderError && <div className="error-message">{genderError}</div>}
            </Col>
          </Row>
          <Col md={3} className="form-group">
            <Form.Label><b>Address:</b></Form.Label>
            {/* <Form.Control
              as="textarea" rows={4}
              className="form.control"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => {setAddress(e.target.value);}}
            /> */}
            <input
  type="text"
  name="address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
/>

          </Col>
          <Row>
            <Col md={3} className="form-group">
              <button className="btn btn-primary" onClick={handleSave}>
                Submit
              </button>
            </Col>
            <Col md={3} className="form-group">
              <div className="search-container">
                <label>Search by Name:</label>&nbsp;
                <img src="/images/serachimg.jpg" alt="Search" className="search-image" />
                <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
              </div>
            </Col> 
          </Row>
        </div>     
        <div className="table-container">
          <div className="table-header">
            {noDataAvailable ? (
            <div className="error-message" style={{ color: 'red' }}>
              No data available.
            </div>
          )  : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ? (
                    data
                      .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((item, index) => {
                        const dob = item.dob ? new Date(item.dob).toLocaleDateString() : 'N/A';

                        return (
                          <tr key={index} className="table-row">
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{dob}</td>
                            <td>
                              {item.gender.trim() === 'Male' ? (
                                <img src="/images/Male.jpg" alt="Male" className="gender-image" />
                              ) : item.gender.trim() === 'Female' ? (
                                <img src="/images/Female.jpg" alt="Female" className="gender-image" />
                              ) : (
                                ''
                              )}
                            </td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>
                            {/* <button className="btn btn-primary" onClick={() => {
                              console.log("Editing item with ID:", item.id);  handleEditClick(item.id);}}>Edit</button> */}
                         <td>
                <button onClick={() => handleEditClick(item)}>Edit</button>
              </td>
                              <button className="btn btn-danger" onClick={() => handleDeleteClick(item.id,item.name)}>Delete</button>

                            </td>
                          </tr>
                        );
                      })
                  ) : (
                    <tr>
                      <td colSpan="7">{'No data found.'}</td>
                    </tr>
                  )}
                </tbody>
              </Table>
              
            )}
          </div>
          
        </div>
{/* Conditionally render the popup */}
{showPopup && (
        <div className="popup">
          {/* Display the selectedRowData */}
          <p>ID: {selectedRowData.id}</p>
          <p>Name: {selectedRowData.name}</p>
          <p>Phone: {selectedRowData.phone}</p>
          <p>Gender:{selectedRowData.Gender}</p>
          <p>Address:{selectedRowData.Address}</p>
          {/* Other fields */}
          
          {/* Add buttons for actions */}
          <button>Edit</button>
          <button>Update</button>
          <button onClick={handleClosePopup}>Cancel</button>
        </div>
      )}        
        <Modal show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* Add your confirmation message here */}
    Are you sure you want to delete this employee?{employeeNameToDelete}
  </Modal.Body>
  <Modal.Footer>
    {/* Add the Delete and Cancel buttons */}
    <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
      Cancel
    </Button>
    <Button variant="danger" onClick={handleDeleteConfirm}>
      Delete
    </Button>
  </Modal.Footer>

</Modal>


        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  <Container>
    <Form.Label><b>ID:</b></Form.Label>
    <Form.Control
    type="text"
    placeholder="Enter ID"
    value={editId} disabled
    onChange={(e) => {
      console.log("Editing Id:", e.target.value);
    SetEditId(e.target.value);
    }}
  />
    {idErrorMessage && <div className="error-message">{idErrorMessage}</div>}
    <br></br>
    <Row>
    
      <Col md={6}>
        <Form.Label><b><font color="red"> *Name:</font></b></Form.Label>&nbsp;
        <Form.Control
    type="text"
    placeholder="Enter Name"
    value={Editname}
    onChange={(e) => {
      console.log("Editing Name:", e.target.value);
      SetEditName(e.target.value);
    }}
  />
{nameError && <div className="error-message">{nameError}</div>}
      </Col>
      <Col md={6}>
        <Form.Label><b><font color="red">*Phone:</font></b></Form.Label>&nbsp;
        <Form.Control
          type="text"
          placeholder="Enter Phone"
          value={EditPhone} // Use EditPhone instead of editPhone
          onChange={(e) => {
            console.log("Edit Phone:", e.target.value);
            SetEditPhone(e.target.value);
          }}
        />
      </Col>
    </Row>
    <br></br>
    <Row>
      <Col md={6}>
        <Form.Label><b><font color="red">* DOB:</font></b></Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={date => {
            console.log("Edit DOB:", date);
            setSelectedDate(date);
          }}
          dateFormat="yyyy/MM/dd"
          isClearable
          placeholderText="Select DOB"
        />
      </Col>
      <Col md={6}>
        <Form.Label><b>Gender:</b></Form.Label>
        <Form.Control
          as="select"
          value={Editgender} // Use Editgender instead of EditGender
          onChange={(e) => {
            console.log("Edit Gender:", e.target.value);
            SetEditGender(e.target.value);
          }}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Col>
    </Row>
    <br></br>
    <Form.Label><b>Address:</b></Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter Address"
      value={EditAddress} // Use EditAddress instead of Editaddress
      onChange={(e) => {
        console.log("Edit Address:", e.target.value);
        SetEditAddress(e.target.value);
      }}
    />
  </Container>
</Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal> */}

{/* <Modal show={isEditMode} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Employee</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Container>
      <Form.Label><b>ID:</b></Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter ID"
        value={editId} // Use EditId instead of ID
        onChange={(e) => {
          console.log("Editing Id:", e.target.value);
          SetEditId(e.target.value);
        }}
      />
      {idErrorMessage && <div className="error-message">{idErrorMessage}</div>}
      <br></br>
      <Row>
        <Col md={6}>
          <Form.Label><b><font color="red">*Name:</font></b></Form.Label>&nbsp;
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={editName} // Use EditName instead of Editname
            onChange={(e) => {
              console.log("Editing Name:", e.target.value);
              SetEditName(e.target.value);
            }}
          />
          {nameError && <div className="error-message">{nameError}</div>}
        </Col>
        <Col md={6}>
          <Form.Label><b><font color="red">*Phone:</font></b></Form.Label>&nbsp;
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            value={EditPhone} // Use EditPhone instead of editPhone
            onChange={(e) => {
              console.log("Edit Phone:", e.target.value);
              SetEditPhone(e.target.value);
            }}
          />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={6}>
          <Form.Label><b><font color="red">*DOB:</font></b></Form.Label>
          <DatePicker
            selected={selectedDate}
            onChange={date => {
              console.log("Edit DOB:", date);
              setSelectedDate(date);
            }}
            dateFormat="yyyy/MM/dd"
            isClearable
            placeholderText="Select DOB"
          />
        </Col>
        <Col md={6}>
          <Form.Label><b>Gender:</b></Form.Label>
          <Form.Control
            as="select"
            value={Editgender} // Use EditGender instead of Editgender
            onChange={(e) => {
              console.log("Edit Gender:", e.target.value);
              SetEditGender(e.target.value);
            }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Col>
      </Row>
      <br></br>
      <Form.Label><b>Address:</b></Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Address"
        value={EditAddress} // Use EditAddress instead of Editaddress
        onChange={(e) => {
          console.log("Edit Address:", e.target.value);
          SetEditAddress(e.target.value);
        }}
      />
    </Container>
  </Modal.Body>
</Modal> */}
{/* <Modal show={setIsEditModalOpen} onHide={() => setIsEditModalOpen(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Employee</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Container>
      <Form.Group controlId="editId">
        <Form.Label>ID:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter ID"
          value={editId}
          onChange={(e) => SetEditId(e.target.value)}
          isInvalid={!!editIdError}
        />
        <Form.Control.Feedback type="invalid">
          {editIdError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="editName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          isInvalid={!!editNameError}
        />
        <Form.Control.Feedback type="invalid">
          {editNameError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="editPhone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Phone"
          value={EditPhone}
          onChange={(e) => SetEditPhone(e.target.value)}
          isInvalid={!!editPhoneError}
        />
        <Form.Control.Feedback type="invalid">
          {editPhoneError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="editDOB">
        <Form.Label>DOB:</Form.Label>
        <DatePicker
          selected={Editdob}
          onChange={(date) => setEditDob(date)}
          dateFormat="yyyy/MM/dd"
          isClearable
          placeholderText="Select DOB"
        />
      </Form.Group>

      <Form.Group controlId="editGender">
        <Form.Label>Gender:</Form.Label>
        <Form.Control
          as="select"
          value={Editgender}
          onChange={(e) => setEditGender(e.target.value)}
          isInvalid={!!editGenderError}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {editGenderError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="editAddress">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          value={EditAddress}
          onChange={(e) => SetEditAddress(e.target.value)}
          isInvalid={!!editAddressError}
        />
        <Form.Control.Feedback type="invalid">
          {editAddressError}
        </Form.Control.Feedback>
      </Form.Group>
    </Container>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancel</Button>
    
  </Modal.Footer>
</Modal> */}

      </Container>
    </Fragment>
  );
};

export default CRUD;
