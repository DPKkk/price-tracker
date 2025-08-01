
// import React, { useEffect, useState } from "react";
// import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// export default function PriceHistory() {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const storedHistory = JSON.parse(localStorage.getItem("priceHistory")) || [];
//     setHistory(storedHistory);
//   }, []);

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h5" gutterBottom>Price History</Typography>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Product</TableCell>
//             <TableCell>Site</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {history.map((entry, index) => (
//             <TableRow key={index}>
//               <TableCell>{entry.productName}</TableCell>
//               <TableCell>{entry.site}</TableCell>
//               <TableCell>{entry.price}</TableCell>
//               <TableCell>{entry.date}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Box>
//   );
// }

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ChartComponent from "../components/ChartComponent";

export default function PriceHistory() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("priceHistory")) || [];
    setHistoryData(storedHistory);
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Price History</Typography>
      {historyData.length > 0 ? (
        <ChartComponent historyData={historyData} />
      ) : (
        <Typography>No price history available.</Typography>
      )}
    </Box>
  );
}
