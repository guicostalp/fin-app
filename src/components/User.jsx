import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import OptionsMenu from './OptionsMenu';





function User() { // Accept a 'route' prop

  return (
    <Stack
    direction="row"
    sx={{
      p: .5,
      gap: 2,
      alignItems: 'center',
      
      borderColor: 'divider',
    }}
    >
        <Avatar
        sizes="small"
        alt="Riley Carter"
        src="/static/images/avatar/7.jpg"
        sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: 'auto' }}>
            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                Riley Carter
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                riley@email.com
            </Typography>
        </Box>
        <OptionsMenu />

    </Stack>
  );
}



export default User;