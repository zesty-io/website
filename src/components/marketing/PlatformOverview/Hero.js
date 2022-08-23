/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';

/**
 * Components Imports
 */

import Container from 'blocks/container/Container';

const Hero = ({ theme, isExtraLarge, isDarkMode, content, FillerContent }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				minHeight: 800,
				background: `url(${content.header_image.data[9].url})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<Container>
				<Grid container spacing={2}>
					<Grid item sm={12} md={6}>
						<Typography />
					</Grid>
					<Grid item sm={12} md={6}>
						Test
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
