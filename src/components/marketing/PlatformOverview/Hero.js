/**
 * MUI Imports
 */
import { Box, Grid, Typography } from '@mui/material';

/**
 * Components Imports
 */

import Container from 'blocks/container/Container';
import DemoCta from 'components/cta/DemoCta';
import TryFreeButton from 'components/cta/TryFreeButton';

const Hero = ({ theme, isMedium, content, FillerContent }) => {
	return (
		<Box
			component="section"
			sx={{
				py: 10,
				position: 'relative',
				minHeight: 800,
				background: isMedium ? '' : `url(${content.header_image.data[9].url}?width=1920&height=840)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				display: 'flex'
			}}
		>
			<Container sx={{}}>
				<Grid container spacing={2}>
					<Grid item sm={12} md={6}>
						<Box>
							<Typography
								sx={{
									color: isMedium ? '' : theme.palette.common.white,
									fontWeight: isMedium ? 'regular' : 'bold'
								}}
								variant="h3"
								component="h1"
							>
								{content.title || FillerContent.description}
							</Typography>
							<Typography
								sx={{
									color: isMedium ? '' : theme.palette.common.white,
									lineHeight: 1.2,
									mt: 2
								}}
								variant="h6"
								component="p"
							>
								{content.header_description || FillerContent.description}
							</Typography>
						</Box>

						<Box sx={{ mt: 4, display: 'flex', gap: 2, flexDirection: isMedium ? 'column' : 'row' }}>
							<TryFreeButton
								fullWidth={isMedium}
								sx={{
									button: {
										background: isMedium
											? theme.palette.zesty.zestyOrange
											: theme.palette.common.white,
										color: isMedium ? theme.palette.common.white : theme.palette.zesty.zestyOrange,
										'&:hover': {
											color: 'white'
										}
									}
								}}
								text={'Get Started'}
								variant="contained"
							/>
							<DemoCta
								fullWidth={isMedium}
								sx={{ color: isMedium ? theme.palette.zesty.zestyOrange : theme.palette.common.white }}
							/>
						</Box>
					</Grid>
					<Grid item sm={12} md={6}>
						<Box hidden={!isMedium}>
							<Box
								sx={{ width: '100%' }}
								component="img"
								alt="zesty header"
								src={content.header_image.data[8].url || FillerContent.photos[0].src}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
