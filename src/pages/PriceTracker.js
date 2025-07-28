import {
  Box,
  Paper,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import priceComparisonLogo from '../utils/Images/priceComparison.png'; // Update the path if necessary
import image from '../utils/Images/illastration.png'; // Update the path if necessary
import backgroundImage from '../utils/Images/image.png'; // Update the path if necessary
export default function PriceTracker() {
  return (
    <Box
  sx={{
    minHeight: '100vh',
    width: '100vw',
    bgcolor: '#fdfdfa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 4,
    // backgroundColor:'',
    // backgroundImage: {backgroundImage},
    // backgroundSize: 'cover', // Ensures the image covers the entire page
    // backgroundPosition: 'center', // Centers the image
    // backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  }}
>
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center',
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            component="img"
            src={priceComparisonLogo}
            alt="Price Tracker Logo"
            sx={{
              width: 32,
              height: 32,
              marginRight: 1,
            }}
          />
          PRICE TRACKER
        </Typography>
        {/* <Button variant="text" sx={{ fontWeight: 'bold' }}>
          Login / Sign Up
        </Button> */}
      </Box>

      {/* Search Bar */}
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: 2,
          borderRadius: '16px',
          marginBottom: 4,
        }}
      >
        <TextField
          placeholder="Search for a product..."
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Main Content */}
      <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 800,
    marginTop: 4, // Add spacing if needed
  }}
>
  {/* Left Side: Text Content */}
  <Box sx={{ flex: 1, textAlign: 'left', paddingRight: 2 }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      Track Prices. Save Money. Shop Smart.
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: 2 }}>
      Compare prices across your favorite stores instantly.
    </Typography>
    <Button variant="contained" color="primary">
      Start Tracking
    </Button>
  </Box>

  {/* Right Side: Image */}
  <Box
    component="img"
    src={image} // Replace with your desired image URL
    alt="Illustration"
    sx={{ maxWidth: 300, flex: 1 }}
  />
</Box>
    </Box>
  );
}
