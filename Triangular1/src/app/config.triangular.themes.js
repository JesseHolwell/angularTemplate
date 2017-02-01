(function() {
    'use strict';

    angular
        .module('app')
        .config(themesConfig);

    /* @ngInject */
    function themesConfig ($mdThemingProvider, triThemingProvider, triSkinsProvider) {
        /**
         *  PALETTES
         */
        $mdThemingProvider.definePalette('white', {
            '50': 'ffffff',
            '100': 'ffffff',
            '200': 'ffffff',
            '300': 'ffffff',
            '400': 'ffffff',
            '500': 'ffffff',
            '600': 'ffffff',
            '700': 'ffffff',
            '800': 'ffffff',
            '900': 'ffffff',
            'A100': 'ffffff',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('black', {
            '50': 'e1e1e1',
            '100': 'b6b6b6',
            '200': '8c8c8c',
            '300': '646464',
            '400': '3a3a3a',
            '500': 'e1e1e1',
            '600': 'e1e1e1',
            '700': '232323',
            '800': '1a1a1a',
            '900': '121212',
            'A100': '3a3a3a',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.definePalette('primeSolveDark', {
            '50': '135B84',
            '100': '135B84',
            '200': '135B84',
            '300': '135B84',
            '400': '135B84',
            '500': '135B84',
            '600': '135B84',
            '700': '135B84',
            '800': '135B84',
            '900': '135B84',
            'A100': '135B84',
            'A200': '135B84',
            'A400': '135B84',
            'A700': '135B84',
            'contrastDefaultColor': 'light',
            'contrastLightColors': '500 700 800 900',
            'contrastStrongLightColors': '500 700 800 900'
        });

        $mdThemingProvider.definePalette('primeSolveLight', {
            '50': '00c0f3',
            '100': '00c0f3',
            '200': '00c0f3',
            '300': '00c0f3',
            '400': '00c0f3',
            '500': '00c0f3',
            '600': '00c0f3',
            '700': '00c0f3',
            '800': '00c0f3',
            '900': '00c0f3',
            'A100': '00c0f3',
            'A200': '00c0f3',
            'A400': '00c0f3',
            'A700': '00c0f3',
            'contrastDefaultColor': 'light',
            'contrastLightColors': '500 700 800 900',
            'contrastStrongLightColors': '500 700 800 900'
        });

        /**
         *  SKINS
         */

        triThemingProvider.theme('primeSolveDarkColours')
        .primaryPalette('primeSolveDark')
        .accentPalette('primeSolveLight', {
            'default': '500'
        })
        .warnPalette('deep-orange');

        triThemingProvider.theme('primeSolveLightColours')
        .primaryPalette('primeSolveLight')
        .accentPalette('primeSolveDark', {
            'default': '500'
        })
        .warnPalette('deep-orange');

        triSkinsProvider.skin('prime-solve-theme', 'Prime Solve')
        .sidebarTheme('primeSolveDarkColours')
        .toolbarTheme('primeSolveLightColours')
        .logoTheme('primeSolveDarkColours')
        .contentTheme('primeSolveDarkColours');


        /**
         *  FOR DEMO PURPOSES ALLOW SKIN TO BE SAVED IN A COOKIE
         *  This overrides any skin set in a call to triSkinsProvider.setSkin if there is a cookie
         *  REMOVE LINE BELOW FOR PRODUCTION SITE
         */
        triSkinsProvider.useSkinCookie(true);

        /**
         *  SET DEFAULT SKIN
         */
        triSkinsProvider.setSkin('prime-solve-theme');
    }
})();
