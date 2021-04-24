import React, { useState } from "react";
import albaraka from "../../images/banklogos/albaraka.png";
import aliedbank from "../../images/banklogos/aliedbank.png";
import bankalfalah from "../../images/banklogos/bankalfalah.png";
import bankislami from "../../images/banklogos/bankislami.png";
import bankalhabib from "../../images/banklogos/bankalhabib.png";
import dib from "../../images/banklogos/dib.png";
import faysalbank from "../../images/banklogos/faysalbank.png";
import hbl from "../../images/banklogos/hbl.png";
import jsbank from "../../images/banklogos/jsbank.png";
import mcb from "../../images/banklogos/mcb.png";
import mezanbank from "../../images/banklogos/mezanbank.png";
import ubl from "../../images/banklogos/ubl.png";
import ublameen from "../../images/banklogos/ublameen.png";
import { FaTimes } from "react-icons/fa";

function BankDetails() {
  const [bankCardsControl, setBankCardsControl] = useState(false);
  const [bankDetails, SetBankDetails] = useState({
    albaraka: {
      image: albaraka,
      tableData: [
        { title: "Account No", value: "0110330766024" },
        { title: "Swift Code", value: "" },
        { title: "IBAN No ", value: "" },
        { title: "Branch Code ", value: "" },
      ],
    },
    aliedbank: {
      image: aliedbank,
      tableData: [
        { title: "Account No", value: "001-00058069100-22" },
        { title: "Swift Code", value: "ABPAPKKA1093" },
        { title: "IBAN No ", value: "PK001093000580691002" },
        { title: "Branch Code ", value: "1093" },
      ],
    },
    bankalfalah: {
      image: bankalfalah,
      tableData: [
        { title: "Account No", value: "0016-1001705845(1005)" },
        { title: "Swift Code", value: "ALFHPKKA016" },
        { title: "IBAN No ", value: "PK79ALFH0016001705845" },
        { title: "Branch Code ", value: "00-16" },
      ],
    },
    bankislami: {
      image: bankislami,
      tableData: [
        { title: "Account No", value: "100500058940001" },
        { title: "Swift Code", value: "BKIPPKKA" },
        { title: "IBAN No ", value: "PK39BKIP0100500058940001" },
        { title: "Branch Code ", value: "1005" },
      ],
    },
    bankalhabib: {
      image: bankalhabib,
      tableData: [
        { title: "Account No", value: "1007-008100805101-0" },
        { title: "Swift Code", value: "BAHLPKKA" },
        { title: "IBAN No ", value: "PK28 BAHL1007008100805101" },
        { title: "Branch Code ", value: "1007" },
      ],
    },
    dib: {
      image: dib,
      tableData: [
        { title: "Account No", value: "11036009" },
        { title: "Swift Code", value: "DUIBPKKA" },
        { title: "IBAN No", value: "PK46DUIB0000000011036009" },
        { title: "Branch Code", value: "0-020" },
        { title: "", value: "" },
        { title: "Account No", value: "11036001" },
        { title: "Swift Code", value: "DUI" },
        { title: "IBAN No", value: "PK46DUIB0000000011036001" },
        { title: "Branch Code", value: "0-020" },
      ],
    },
    faysalbank: {
      image: faysalbank,
      tableData: [
        { title: "Account No", value: "3443301000000160" },
        { title: "Swift Code", value: "FAYSPKKA344" },
        { title: "IBAN No", value: "PK75FAYS3443301000000160" },
        { title: "Branch Code", value: "344" },
      ],
    },
    hbl: {
      image: hbl,
      tableData: [
        { title: "Account No", value: "50107900261955" },
        { title: "Swift Code", value: "HABBPKKA007" },
        { title: "IBAN No", value: "PK48 HABIB 0050 1079 0026 1955" },
        { title: "Branch Code", value: "5010" },
      ],
    },
    jsbank: {
      image: jsbank,
      tableData: [
        { title: "Account No", value: "9523000000213318" },
        { title: "Swift Code", value: "JSBLPKKA" },
        { title: "IBAN No", value: "PK21JSBL9523000000213318" },
        { title: "Branch Code", value: "952" },
      ],
    },
    mcb: {
      image: mcb,
      tableData: [
        { title: "Account No", value: "1153190661008081" },
        { title: "Swift Code", value: "MUCBPKKA" },
        { title: "IBAN No", value: "PKSOMUCB9000860031000605" },
        { title: "Branch Code", value: "1923" },
      ],
    },
    mezanbank: {
      image: mezanbank,
      tableData: [
        { title: "Account No", value: "0120-0100405110" },
        { title: "Swift Code", value: "MEZNPKKA120" },
        { title: "IBAN No ", value: "PK 13MEZN0001200100405112" },
        { title: "Branch Code ", value: "120" },
      ],
    },
    ubl: {
      image: ubl,
      tableData: [
        { title: "Swift", value: "UNILPKKA" },
        { title: "Bank Name", value: "United Bank Limited" },
        { title: "Branch Add", value: "bahadurabad Branch Karachi, Pakistan" },
        { title: "Branch Code", value: "0932" },
        {
          title: "Account Title",
          value: "Saylani Welfare International trust",
        },
        {
          title: "For Us Dollar",
          value: "3500054-1",
        },
        {
          title: "For Us Pound",
          value: "3120018-9",
        },
        {
          title: "For Euro",
          value: "3180007-7",
        },
        {
          title: "For Saudi Riyal",
          value: "9280005-6",
        },
        {
          title: "For Dirham",
          value: "3920003-9",
        },
        {
          title: "For Japanese Yen ",
          value: "061-0001-8",
        },
        {
          title: "For any other currency (Pak Rupees A/C)",
          value: "373-00-786",
        },
      ],
    },
    ublameen: {
      image: ublameen,
      tableData: [
        { title: "Account No", value: "0112-0891-1000-4140" },
        { title: "Swift Code", value: "UNILPKKAIMB" },
        { title: "IBAN No", value: "PK49UNIL0112089110004140" },
        { title: "Branch Code", value: "0-891" },
      ],
    },
  });
  const [currentBank, setCurrentBank] = useState({
    image: dib,
    tableData: [
      { title: "Account No", value: "11036009" },
      { title: "Swift Code", value: "DUIBPKKA" },
      { title: "IBAN No", value: "PK46DUIB0000000011036009" },
      { title: "Branch Code", value: "0-020" },
      { title: "", value: "" },
      { title: "Account No", value: "11036001" },
      { title: "Swift Code", value: "DUI" },
      { title: "IBAN No", value: "PK46DUIB0000000011036001" },
      { title: "Branch Code", value: "0-020" },
    ],
  });
  return (
    <div>
      <div className="bankDetails">
        <div className="px-5">
          <h3 className="color">Bank Details</h3>
          <hr className="text-white bg-white" />
        </div>
        <div className="bank row justify-content-center p-0 m-0">
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.ubl);
              }}
            >
              <img alt="" width="150px" src={ubl} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.bankislami);
              }}
            >
              <img alt="" width="150px" src={bankislami} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.albaraka);
              }}
            >
              <img alt="" width="150px" src={albaraka} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.aliedbank);
              }}
            >
              <img alt="" width="150px" src={aliedbank} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.bankalfalah);
              }}
            >
              <img alt="" width="150px" src={bankalfalah} />
            </div>
          </div>

          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.bankalhabib);
              }}
            >
              <img alt="bankalhabib" width="150px" src={bankalhabib} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.dib);
              }}
            >
              <img alt="" width="150px" src={dib} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.faysalbank);
              }}
            >
              <img alt="" width="150px" src={faysalbank} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.hbl);
              }}
            >
              <img alt="" width="150px" src={hbl} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.jsbank);
              }}
            >
              <img alt="" width="150px" src={jsbank} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.mcb);
              }}
            >
              <img alt="" width="150px" src={mcb} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.mezanbank);
              }}
            >
              <img alt="" width="150px" src={mezanbank} />
            </div>
          </div>
          <div className="col-md-4 bankCard">
            <div
              onClick={() => {
                setBankCardsControl(true);
                setCurrentBank(bankDetails.ublameen);
              }}
            >
              <img alt="" width="150px" src={ublameen} />
            </div>
          </div>
        </div>
      </div>
      {bankCardsControl ? (
        <div className="bankCardDetails">
          <div className="row p-0 m-0">
            <div className="col-md-10">
              <div>
                <button
                  className="closebtn"
                  onClick={() => setBankCardsControl(false)}
                >
                  <FaTimes style={{ fontSize: "1.2em" }} />
                </button>
              </div>
              <div>
                <img alt="" width="150px" src={currentBank.image} />
              </div>
              <div
                style={{ borderRadius: "10px", width: "300px" }}
                className="p-3 py-4 my-2 bg-white shadow"
              >
                <table className="bankTable">
                  <tbody>
                    {currentBank.tableData.map((e, i) => {
                      return (
                        <tr key={i}>
                          <th>{e.title}</th>
                          <td>{e.value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default BankDetails;
