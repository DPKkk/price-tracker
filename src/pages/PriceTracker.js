
import {
  Box,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/MicRounded';
// Add other icons as required

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
        justifyContent: 'center',
      }}
    >
      {/* Logo / Title */}
      <Typography
        variant="h4"
        component="div"
        fontWeight={500}
        sx={{
          mb: 4,
          letterSpacing: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Price Tracker
        <Box
          component="span"
          sx={{
            ml: 1,
            px: 1.5,
            py: 0.5,
            fontSize: '0.90rem',
            background: '#e6f0fa',
            color: '#1976d2',
            borderRadius: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            display: 'inline-block',
            letterSpacing: 0.5,
          }}
        >
          pro
        </Box>
      </Typography>
      {/* Search Field */}
      <Paper
        elevation={3}
        sx={{
          px: 3,
          py: 2.5,
          borderRadius: '16px',
          boxShadow: '0 0 24px rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          placeholder="Ask anything or @mention a Space"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Stack direction="row" spacing={1}>
                  
                  <IconButton size="small" aria-label="voice input" >
                    <MicIcon />
                  </IconButton>
                </Stack>
              </InputAdornment>
            ),
            sx: { py: 0.5 },
          }}
          sx={{
            minWidth: 380,
            borderRadius: 2,
            bgcolor: '#f6f7f9',
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              bgcolor: '#f6f7f9',
              pr: 0,
              pl: 0,
            },
            '& input': {
              py: 1.2,
              fontSize: '1.1rem',
            },
          }}
        />
      </Paper>
    </Box>
  );
}
