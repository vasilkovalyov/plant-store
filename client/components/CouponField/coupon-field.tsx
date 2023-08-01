import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function CouponField() {
  return (
    <Box className="coupon-field">
      <form>
        <Box className="coupon-field__box">
          <TextField
            type="text"
            placeholder="Enter coupon code here..."
            className="coupon-field__input"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            className="coupon-field__button"
            size="small"
          >
            Apply
          </Button>
        </Box>
      </form>
    </Box>
  );
}
