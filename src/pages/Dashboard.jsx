import DataTable from "../components/DataTable";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "../components/Modal";
import Btn from "../components/Btn";
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const [students, setStudents] = useState([]);
const [modalOpen, setModalOpen] = useState(false);
const [currentStudent ,setCurrentStudent]=useState({})
const navigate = useNavigate()

const openmodal=(row)=>{
setModalOpen(true),
setCurrentStudent(row)
}
const Base_Api=import.meta.env.VITE_BASE_URL
  const getAllStudents = async () => {
    try {
      const res = await axios.get(`${Base_Api}/api/projects`);
      console.log(res);
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      sortable: true,
      Cell: ({ row }) => <span>{row.personalDetails.name}</span>,
    },
    {
      Header: "Collage Name",
      accessor: "collegeName",
      sortable: true,
      Cell: ({ row }) => <span>{row.collegeDetails.collegeName}</span>,
    },
    {
      Header: "Branch",
      accessor: "branch",
      sortable: true,
      Cell: ({ row }) => <span>{row.collegeDetails.branch}</span>,
    },
    // {
    //   Header: 'Status',
    //   accessor: 'status',
    //   sortable: true,
    //   Cell: ({ value }) => (
    //     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
    //       value === 'active' ? 'bg-green-100 text-green-800' :
    //       value === 'In Progress' ? 'bg-blue-100 text-blue-800' :
    //       'bg-yellow-100 text-yellow-800'
    //     }`}>
    //       {value}
    //     </span>
    //   )
    // },
    {
      Header: "Action",
      accessor: "actions",
      sortable: false,
      Cell: ({ row }) => (
        <div className="flex gap-5 text-xl">

          <span onClick={()=> openmodal(row)} className="cursor-pointer text-gray-600 hover:text-gray-800">
            <i className="ri-eye-line"></i>
          </span>
          <span className="cursor-pointer text-gray-600 hover:text-gray-800">
            <i class="ri-file-word-2-line"></i>
          </span>
          <span onClick={()=>navigate('/priviwe',{state:row})} className="cursor-pointer text-violet-500 hover:text-violet-700">
            <i class="ri-file-pdf-2-line"></i>
          </span>
        </div>
      ),
    },
  ];
  console.log(currentStudent);
  
  return (
    <div className="p-12">
      <DataTable
        columns={columns}
        data={Array.isArray(students) ? students : []}
        defaultSort={{ field: "_id", direction: "asc" }}
        pageSize={8}
        searchable={true}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Profile View"
        footer={
          <div className="flex justify-end gap-2">
            <Btn btname="Cancel" btclass="Secondary" btnclick={() => {
              setModalOpen(false);
              setCurrentStudent({});
            }} />
            {/* <Btn btname="Save" btclass="primary" type="submit"  /> */}
          </div>
        }
      >
        <div className="space-y-4" >
            <div className="flex justify-around"><div>Name</div><div>{currentStudent.personalDetails?.name}</div></div>
         
        </div>
      </Modal>
    </div>
  );
}

export default Dashboard;
