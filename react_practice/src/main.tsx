import ReactDOM from "react-dom/client";

import HashPwd from "./HashPwd.tsx";
import { BrowserRouter } from "react-router-dom";
import DatePickerTest from "./DatePickerTest.tsx";
import ScrollTest from "./ScrollTest.tsx";
import Test from "./Test.tsx";
import Bubbling from "./Bubbling.tsx";
import Center from "./Center.tsx";
import LinkPractice from "./LinkPractice.tsx";
import PdfTest from "./PdfTest.tsx";
import { PDFViewer } from "@react-pdf/renderer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PdfTest />
);
