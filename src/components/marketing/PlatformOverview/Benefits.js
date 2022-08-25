/**
 * MUI Imports
 */
import { Box, Grid, Typography, Container } from '@mui/material';

/**
  * Components Imports
  */

const Benefits = ({ theme, isMedium, content, FillerContent }) => {
	return (
		<Box>
			<Container>
				<Typography
					variant="h3"
					component="h2"
					sx={{
						width: '100%',
						maxWidth: 850,
						fontWeight: 'bold',
						color: theme.palette.zesty.zestyDarkText
					}}
				>
					{content.benefits_title_h2 || FillerContent.description}
				</Typography>
			</Container>
			<Box sx={{ width: '65%', height: 10, background: theme.palette.zesty.zestyTealWhite, mt: 2 }} />

			<Container>
				{[ 1, 2, 3, 4 ].map(() => (
					<Grid container spacing={2}>
						<Grid item sm={12} md={6}>
							<Typography>Test</Typography>
						</Grid>
						<Grid item sm={12} md={6}>
							<Box>
								<Box component="img" src={FillerContent.photos[0].src} alt="" />
							</Box>
						</Grid>
					</Grid>
				))}
			</Container>
		</Box>
	);
};

export default Benefits;
