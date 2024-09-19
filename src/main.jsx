import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import '../app-assets/vendors/js/vendors.min.js'
import '../app-assets/vendors/js/charts/apexcharts.min.js'
import '../app-assets/vendors/js/extensions/tether.min.js'
import '../app-assets/vendors/js/extensions/shepherd.min.js'
import '../app-assets/vendors/js/tables/datatable/pdfmake.min.js'
import '../app-assets/vendors/js/tables/datatable/vfs_fonts.js'
import '../app-assets/vendors/js/tables/datatable/datatables.min.js'
import '../app-assets/vendors/js/tables/datatable/datatables.buttons.min.js'
import '../app-assets/vendors/js/tables/datatable/buttons.html5.min.js'
import '../app-assets/vendors/js/tables/datatable/buttons.print.min.js'
import '../app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js'
import '../app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js'
import '../app-assets/js/core/app-menu.js'
import '../app-assets/js/core/app.js'
import '../app-assets/js/scripts/components.js'
import '../app-assets/js/scripts/pages/dashboard-analytics.js'
import '../app-assets/js/scripts/datatables/datatable.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
