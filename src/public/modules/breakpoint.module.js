//@flow
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/*
https://material-ui.com/customization/breakpoints/#theme-breakpoints-only-key-media-query
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/

export const BREAKPOINTS = [ 'xs', 'sm', 'md', 'lg', 'xl']

//This is pretty crap tbh
//expensive
//TODO: CAUSES MULTIPLE RENDERS. BAD BUG
export function getBreakpoint(): string {
    const theme = useTheme()
    let cur = 'xs'
    for (let i = 0; i < BREAKPOINTS.length; i++) {
        if(useMediaQuery(theme.breakpoints.only(BREAKPOINTS[i]))){
           cur = BREAKPOINTS[i];
           //For some reason, doing a break causes a hooks rendering issue in implimenting components
           //leaving here as a warninng. 
           //TODO: useMediaQuery clearly has side-effects. Investigate
           //break; 
       } 
    }
    return cur
}