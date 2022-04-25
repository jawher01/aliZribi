import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllClasses } from "../../js/actions/classe";
import { Spinner } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import Modal from "./ModalAjouteClasse";
import Acceil from "../loyout/acceil";
const Classes = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classeReducer.classe);
  const loadclasses = useSelector((state) => state.classeReducer.loadclasses);
  //(const publication=useSelector((state)=>state.formationReducer.formation))



  useEffect(() => {
    dispatch(getAllClasses());
  }, [getAllClasses]);
  return (
    <div>
      <div>
        <div>
          <Acceil />
        </div>
        <div style={{ marginLeft: "23%", marginTop: "5%" }}>
          <Modal />
        </div>
        <div
          style={{
            marginTop: "5%",
            marginBottom: "20%",
            marginLeft: "23%",
            marginRight: "23%",
            width: "70%",
          }}
        >
          {loadclasses ? (
            <Spinner animation='border' variant='info'>
              <span className='sr-only'></span>
            </Spinner>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>nom </th>
                  <th>duree</th>
                  <th>nb-heure</th>
                  <th>formation</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classe) => (
                  <tr>
                    <td>{classe.nom}</td>
                    <td>{classe.duree}</td>
                    <td>{classe.nb_heure}</td>
                    <td>
                        <div>{classe.formation.nom}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classes;
