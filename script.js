document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
       
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQXFxYYGBkdGRgZFxwZIBwYIhkZIBkZHBwcHyoiIBwoIhkZJDQjKSsuMTExHCI2OzYwOiowMS4BCwsLDw4PHBERHTAoIScwMDIwMDAwMDAwMzAwMDAwMDAyMjAwMDAwMjAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwYBB//EAEAQAAIBAwIEAwYEBAUDAwUAAAECEQADIRIxBAVBUSJhcRMygZGh8AZCscEjUmLRFENy4fEVM5KCwtIkU2Oisv/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACoRAAMAAgIDAAIABgIDAAAAAAABAgMREiEEMUETIlFhcYGhwTKxBRQj/9oADAMBAAIRAxEAPwD5RfeB50CTV79yTWdAEq9l9LA9jVKlAHSuJIb8rJpnzg/qD9PKtUwQf5cHzHf9/Q0FyC6LgNpjtlT99t/SaYaTMfnXfsyxiPvqfg2at8lscWCGTT1Hu52zg/LBr02yRAwfPofMUv4bwmQfCPmvffpvTFbu380bjaM4P9p+O9QpbIOQD/CAGXViZ/LtPrOfpV+J4drp3a2kQQIBI8zmPhRha4Iwp+JH2al/imA92PjUdaGkI0HsbnsmPgb3DvpPY/fWmWnsPF1Azn+de47jrM4zSvm1wEHVVuSc4GLdwkfyv1Hr5ffmJpl+uSHKw3ae3RvMHufuN61tW4HaZwfTpVxaXyE9RBVvP4/75ou1aZYiQI6HX03jB8qjSK3GgfgONWzeTSmpiMgHoY2MZ/2Nec2dbl0sNs4GQId1aD/qV80TxD7PCl11aDGnxEY/Sfh50jfhktcOL9xmDaD7JdQ/7jAn1hTJPofSuVlxJ5G/vSKbuprv0MeHCjc09XjraWdTWyxDALt7xBIO/SDXL8G4aCNmg/ZptzBvBbX/AFMf/wCV+cNWTjxrbNDQnvqSzMY8RJwMZM47elbWVNEW7cjOx2+ony2NEcNwZBHboe/+9K8nXY9Dj8MWvfn+Q9dv718p/FhH+IeK+s3OIXh+He4TBIhfXcn5Ca+Nc04n2lxn7nHp0rX/AOL5U6r4U5ejHhmhhO1Hpyd7jqLQktsP2pbEGnHIuPKMoJiDIPY9K69b+GcAtXGtMQwyMEGt+N4KQHUgyJgdK6j8YcmF+z/jbEEri+g6H/7g8j19a4/guI0N3HUVGK5Lf36ALRXA21ZobtMd9vj3PwrbjuHU+K2fMjtS+rEwGX+HQsdJiJxMTAY41Z6CZwM16tu2ca+3UDqZ9dht3mlleg0AH3uFQT4vTbeCc98gD4157C2SBqAA3OoZ8TZ7bacVXh7gYQax4ixpNIDZeHt4lt46jrpz5DJxvivWtWjHiiR06e9v8h86DrymATdsJJhvqD+9Sh9FSgCtSpUoAlSpUoA0tXCpDAwQcGul4PjRd06pS4BjsQeo7jHqPnXNgCcbUy5XwxvlbIIVp8DMSAGnCseksYB7kbTQSmnJ0aATvpePUMceX13717BBmCp8oK/TEZ8qR8FzJ0ZbV1DuVMzq1AxBByCDI6H40/4HiF/JcBXYq+fhMT8CPjSL5pM8vK/Qg9oI/Rv2ml3E3b5xIA9V/bNOGsyR4BHdWAx16gk1X/ppcEhQoHVmDb7DSD+sVFlqaOUawxbq7fQes1tY5eRJgM0GT+VR3nvXRDlYB0+0Lk4C2l04iT4mJHecdN6w5hw5VAqrE+6AJnrmck5G++MCoVkmXr6SS5La+APLrl+2AbZlDkKwBETGrynJx5U4XmTSoUeIwPDtJMaYIgf71lY5ta0KjsFZhBKgASc57R32wYrziU9mICnUUJYjHs7cZ2B8bCR5D1is1ZcjrXrfotahRve2Gf8AXHDELoZdtRaJOSxXYHIA88dsLeYcwS8ty21sah4wUA3k6mHUkyZHcz0Nc7a4o5IMECYA+flOB6xR/I+EF55YnUVMmTP1/pxirKx8Vun67/uZk5yNSkPOUJZ0xbuEqoBJcezHinCajkCM+vWaOv2yXiRoAUBhkR6jzZqS/wDS1tuqIhMZ9ozL6HEZG0enrTCzcKKFUkCZgYwTvHr8N8VgzSnW5fs1R4712P8AhuWMIMSNIJIgjHp8PpTexat27Ja5HTSOpPlXC8VxRBGlypkEFZBggjfv7uJ/NGaVc357cuqQ7nJAJnMYkTuIkiOuc5qmPArI02yrIlHWwn8d/in259lb90YMbb+6O+Yk+QA6zyAXfoR0inKcpWQyuVIgwZMnyIyP+aM4jkwuaCx0tpXUw8RY9SRO5M/ZFdfE8eKOM+jM8WR12hfyu3bup7JzB/KxOA3aPOg7/CXLVw23Uhh0/cdx5084T8MNoLrdWVGqMSRnIz0ifjWvEcAbltAR4goZX05yABqIHuwNicU/zx/EP/Xv+Bj+GPxA1i4Dhkgq6HIdT+Vv2NU/GfIlsst+znh7slD/ACt+a2fMUuucA9vVOYkY/wB98wa6H8LcxW9afgb+EvEezc/5d4R7Nj2BPhPeRR0nyn+5VcOX2jk+F4oq4Y56H0ojjuEBHtLeQdx2qnM+XvZco6kEEqR2I3FU4PidBkbEQQetXb+oiCV7R/GcHI9pbkruRuV7z5edAU9iPVNMbDh10n3u9La0s3dJkUAWu2tJrNhTXiLYuIHG/WlmimIzmpVtNSgNlKlSpQM9Aq628xVQa1W5tI+XWgAy/wABFpbyZUHS+x0XOzdIIyp6wRupmvA3BqXwhhBDKx0hpkgEzA2HxAo7lfEafaISAr2gpWIDiQ3Y+NSQQxBMjygi8w4M2irCDbuAlSDMqGIM494Edu1IDoeY8F/jeF9vEcRaB1EkA37SwpumTIvDqMswg58M80t4yX91j4WjwzI3AEAbTG2Kbci5iLVxXJCaWQhsEb4zIIEMSYYTp0mMFT/xNwguKOM4cqyKxN6ygLC27AFnErHs3BHp8wAfox5W5u2tKXdN4GAxOCTJTcRBnQcYKgzBMLTzTilf2LSHkLBUAySIjpnBnbrWHJ+JKOHxgnGmQREMhH8rBtJHYmu74GynEC1dgG5aBQPEH3IAeWOsrJ0x0jJJiq8mRY5dMtxxV0pTC/wryBkBNxtdwgFjIgAwTpIMKg67THYChuecHaaWLDwqSDIBmW7j3cgd4AEZEC8fzG/w+uzaQAmZMkysjKjGJHxpPznh7+h3uEAAmRBBkmFUDMkmYyfdJ2AnmxNVfJvtl+fNSTjGul7ZiqW9RvswdbQAAW3Ae5plE22EGR1A2jVB3B2r14QdOqAXYwfEVlSIxAADd8ZB2O3AcLp4cJpgDJIP+YQfECNo1ROSY+FU5G7WnAbw27ZZMmTpMFVnYxIzsC+BmDp5q09dtejP42Td6bEvM+E/w95iC0wCJ3/qkxg4nHzNWcF/YKNKgu2n3gV8Uknw7nwbfHyJ57xIZywj3iwUZyTsQDHQSdjpbvQHKiS+TDKF04xqLSdfZROfLbatHfHv2X8Uq2vR2fM7a22QMBiQwEzgDzHUufKAemBuHU3TbXTomRORqZWziMYYAeeOtacwvm4uSNeG0qpIGIjuW8JMGcAAnEnLg3RS6s6W/AptawdStBkE/lGJk9e2IyzKf6s2VVLVC3nAUFAhV31wV1bmDIPTxbfH5B8Ny6211iWJAP8AC1bEbqH/ADSJ6/ykdIBfFWYd5nVOsb7GA8TsNiMTAO2wG4PiSLpGAX8WrtklvI4kg9571dM8Z4plFUqpNoL4pRBVyVYMoDCYUy0qV3jKiZxB6kSBwnFufFOznw4gydx1J38iB1zRnO7FwFvCVxmBuNMtpJBIG4PSTgUo5eCHdSJBMD5GDjpmMiOvSicc6aFeStrfXZ1fK+IGloDBS07mD1x2AGIH6VjzfiPcKsQd4mQRkeIfCgv8d4T5TOQxgEr2EHHxEGpxV1SCQfFpyTBgTMD4+XlvWH8WsjZu5JwgXieKDqwmDEyDOAcZ+nnSRr4kzJ7fSi+NXSpaTvp6bb/DFKbjye1dDFCS6Of5Fr0ztecXRxPDJxL5uIVs8T3Jgexv/EDSfMDtXI8TwpQnqu8+VF8n5j7MlDJS6pt3B00n3SP6lMGaoGibVzoSJ/ceVWSuPRhBrV8gEAnS2+enY1fiuD0gOkldpxvE9Cayv2imO/XoRWnDX9JmJBwf7VIYKROa8iieJ4aPEuVPX9qHIpiDuV8VpMH3TvXvMeH0tI2O1BI1O+G/i2Cv5lyPPy9Y/ShCYm017V9NSpACV6BXgr2aQz0U3tcuDWzo1NcVdZA2NkrlhiZVoDDO87BqWWSIyPjPXpinXKeKKTOHAJt3NMsrBWGmYyjCVIMgEqehBTYwDhbviDmJSMEz13iIIB6etNuHtG7NomLQdj6MUGplU7zC6s9PSrc94ACOK4cRbfUjKP8AKuEENb7hSDKk7rQVlwVUAqDIVhAI05GsyRkQxJGDiSDFAA9stZfSZA8J+gZDGx3DD1Bp1w3HezVmjWxIMkDQdKAAFB4chS2oDUNMzkg7jgRxQdESb6jVbKiFe3voIAgPBLhgfFLDPhpULTMyWrZCkjTkAMJXPnpnXnfPSQKW9Ekt9BXOOR+yul7J9pbI1eFSIkDUpVogqSR6Qe8dXyO9b4dUS7hzJYAwCdjEsOhC53idxjP8L8qs22TWzXNLCEmFtmZzABuPJGPdmD2plzznNrhQWt6deor091lGrYRAYAT2XyrnZ86uuErZ0MGF41yr2ZvcW+ysjabkYBRjG4IYAkbwd5mTpNAc5XVZS3gOGlwxki4AfeI67j4+c0DZ50si6xkuCZOChBXxDOdoGwycVpxXMXd7za7ejSpZrgDAOfFCqoAJMGR9aonFSop8rHkv/i+jK1zYWrPj061aYPUbbd4iB6edC8w4bQNd1gwdlhfFBEg6WgwDAkCdzSkI7XELHXBBO0Ab+gGBt5U45rxKFVDtB1LG5AOoEsZMf8VplKLWvpHxfGSh0/Ym4gg3CJAYgz2U7hZ7jqTG57Vr+G01u7QSQBCgFiWnGBE9fSl3MbpkqSSSxJJxJ646V0H4G4INqJx0MgQPmYnfBir81cYdF+OVz4r0OeWc1BZAoKLqwTgllFzSMAGYc9T7vTFa/iHkruzuWUydoI8EDDEE6jIG0z5ZqXvw4zXA6OQyk/lGQWkQs48I6EzB866rl9iToInG2RAnGGOD0ydz61ieX9k8f9zT+P8AVqj5/wANwTKZcjIsjAMQGbXEjYQPLYyTS+9wxS4l0gEkAgSemkCfLwyR01AevWc74DTdaFIAhLXhjcksesrKLGwgztNc5e4BheNsziNI0kkwIlgchYAPoZnpW2b5LkZaji+Pz4aXbpuQqBGYDdj/AJe4/wDVmMZMExFI7oFq6TByOk7xgeYI6ftTIWApa4BqDFQAWkFc+FvMBRG0z0pXzLiJCiT4TEg+sye+47RGKsjvsryLSaZpd4jSnQFiWCiMLOFx6/8A69q04geCdRYNBwOuJk9jH0oe7aLQXY+90EwsMYA6bRnevb5i3jAGe+fs1G501onjttPfoC4i6Sm4wds79+1AzWrmRvWTCrpWkZMtcnstJiOlMuKt6vZXf51gn+tYU/8At+dLEaui5Da9tauWAPGZuWfO6i+JR/qQx6gfArrsqFd4wBPbG30+UbUKxjqDIzjaq3DJo7hOGDg6j4ox0iP+R6U/Q2ynCX1CkGd84kaY+YaYE9qEYwavftlTpMiqE0CPDR3KuJ0ODMdKDq1g5oAc8dwMuxyJM+EY+Galb8PxBKiQJivalsgcwor2vQY/4qAUiYz5RwQvTb/Ow/hE7Fxk2pOAzDY99IPvSK8BuUbBzEnTkdJbYjt8MVXlzKDpdWIzlTkHSdLAdw0HzEinPOeDe+p4jPtrYQ3xG6sAbXErvqR/zZwxB2aFi+xmvKOYhQ4KubVwxdTUPGAQV3GHDMpDCYxAChqGscmILMmUIYAyAQTABgNk4YbkYnNCWr5QKxg6mOAd85OOkCIxGr1rrbCW2VGGStsgzcnxgsFIAEEgEYwJJ9aqyW50l7NGHGr22KuH5TpAMlDowwMHDFlCtGGg+8PLvTu5x6qwLIH9oT4lEnSMNqciSxkHGBI70ou8WWZdUkYjALHwyvzlcDv0pdz3mLLdbSQGZArkdDPuiewAzAP753N5OqfRsn8ePtLs6X/HJZW5cwWhTpEZxGreBEifn1zzvO+Za0JZtVxmDR/KFUj4D3YUdttqS3uOI8KkkDE9YoZ7mSR8pO/96sxeMpe2VZvL31Ja7xDNBZiemTOBsPTyorjObs4VcwAJGBmADtvtuc0JY4dn1aRMCT6Tn9apbTMHf5VpcyY5yWvTC/8AqDrsAOo+P7YqcSbrILjL4JgHoT27xv8AWug5TYs3w9tlknYqpkGDF8TiDEMuP5gOlMl/DVwWdD3dURELhVkfE/IVRly48TW9bNOHHlzbW3r/AAcVxDu5NzT2kgYB7+W1Nvw/zj2bhLsgE++ZMSOqnHl5fCmn/RmtvIYvOswElW8KSTjAOofFW7ZW8w5OrsWtlQgVmIJhkgjwmY1GJPoG7SWqx5Z4kKWTDfI7b/Fqyj3gwAhldYkSTp0kg504MHfea6D8OuZbxQCTCliBA0iYO6xpyerdjXzb8Hc2yEchSq6VYCPMgmY1QD0zHU109njvZsXYqQPc0EHdMqBiASQMTgQTWF4njrT9HQnIskbQR+OuJItlVVpLacAnwgEg6ROZPnGkfDl2uYttcVSUnWCpOD+UzM51bztIrrn4jVG40+XTae25x9CRur4rgkF1rhbxHcDAMnBg4Agxk9fOjH5E6cNEqwNtUmc5zG6SNCjQSWJECYmAvhkaoAOIGGHcEL8QWmLqfCFZVgicRPh1eWfKm9hiSFEEgArqBJGTmAQSdO+flQn4leRbAYTIYaRAydMx3kZJ8hWuL7SRmy4tJtsX8fc1FUAKquSIJM6ZJ79/mTXnMLqaFAEneNxE4+OBW68PqW4wJmV3gYgwdxiGmI6Ur4m5k9SYM+ZGR9asWn6KGqXv0ZcW6yQoAE47xQpY1a61Z1dKM1vbLCj+X8Q9tluIYZGDKfMGRQnDrODtRDIbZ3kHtn7NJ99EBn+KeBU3fbWhFu8guoO2r/uJ6q4YR2ilFm9BBG/lT6xd18FcG7cPcW4h/wDx3PDcUeWoKT60r5hwZBLAQQYZex67VGX1p/ACHsC7a1kwVOmT36D5Ef8AAmlL2ipgiOlXS6dp8/jGDG0+dG3ouKB+YEfoMnttUwF1Rcd6veTSYkHzFVoAY2eJgAA17QCn1qUBowq1oSQKqa9I7UwCUMEBpjEdcR+lP+B5gyG3o0uyB1GqQpsHUXtM2qChAchY/wAzB2AXXeHD2pI0XrQAK6NOq14QH6EuC0Gd1g/lM+8Fd1aicMQQTiJ/L26nrNRZJMN5nathn9jJslzpliujBgOSoIbJXO+k7gV7yrmMlhq0E6jrAIkiMDMbZM5wO9RQQrorBrbOhLODKkBv4gAyIUiCdtMdaD4nhWGfdTq+kgQCdu8lSY3OlsYqNTsnFuWGNzH2appCllli2JJkxtiRP7AxSDjOJLsWMSewgfAU24jhkI0rbHtCwBbUYM4EAqIAIMkEjbtQV7lhLMUDFAVGqJGdgTMTBFEQp7JZMrpaXoXAEnzrdOEaCTAA7keWw670x4LluBKkGTkyAACRKwMmYzsIPbAi8QFY6FmdSjVDSpUg7D3jnI7+VTKRj+G+HLXBo1ahLAhZwAd5/KdiJyPWnHE8ssErfM7CVCSC495iAANLGBA/mxOK85XYFqyWJc33Ck6hGlQfd77R6QNoAHU8JwwLWtJaD4gJIEAKZ32yMbeI7RWHP5HDb30jpYPGTlbXbF34d4BGsNFvSGJgjcwOpYzvIiR8Og/EcxvS1snVonxCBtgiRgkSOn1xXU8VqVDtMmPCEzmJA29R0zXJcbxIBJZR7wIedv4gxqIgDxP1zB23GHDTz1TaTW+v5G58cUrvR5Z497bgziYZSIJEjTgCGaSRt/KOgqvP+Bt319raMHOYgzuPX72pMGBv2tIgPcWFYgyCw0nbaZ38u1G2uJZLjadne4uZ3DTMHyYfea03hcNXL7X/AEUq/wAiapdC7gLxto5ZitxG3IVhB/pYiVbxSc5j+auh5DxK3bMoEMETbACjXAOxjt8dgDEUk/EfLgVDD3u/kNwfpQHIOYGwWc+6YBiJ6mBqnfvpP99L/wDtj5T7Ma34+TjX/FncWUC6lld5YasBjB3Ag9fFA64xVL95PEC2M6hkswnE/EfP0obiOOS4msaC5nY+IjSY9BsPEZAPWKDuc3kK7RqEggABffMQQeqmANXh8+mP8PJ8vpv/AC8evhi1wSDDSRBHUnoc9c5NLuZcS73irSNIggMe5P6tRnC8x1s2rTIaVAlcz3ye/wB7Lr4YudTDUYglgoAAPXptWrGtNp+yjN+yVJ9E4riDbtAA4fUSB3BAieo/ceWU7XO3zrRxqMfCqXbJAnvtWmUkYclU/wChk5qKJrwLXV8n5IHRZbwgS6wQZmOo6ah16elO7ULbKoh5HpHOWxpbPl8o/ejVaZR50xIwDBJxEfGm3MOFS2NaqCP5ozgCDnp/ag/ZqVgwBEwBiYzEdM/WoLJyW9FjwcXrZr+F7X8d7E4v2btsH+opqQx/qRfnSvhL2nbY7jyNMeSOU4iwceC6sbifGNwD9ew2Oatz3kjW2uXAVZDceFEyE1NDERttPaaOSVaf0opcXoV8dwseNfdP09az4dx3I8x9dqP4HiEk+0LBY3VQ+cRKkjET1kb52oTiLRtkOuxGPI/3q0QPeQyZG28mc9frXp92YEA71vfCk+GWJIUH3RM9JM+WYqjnEAEGNjG4IE7TPvY3HegC9lZAMD5N/wDE1K9VWGIb/wAf96lAAFeoKrV1iaYxsvMXVluKAGRgw0rtAIIYblSIkbRPc1m1hzbN8ABXZklTAmJKkD3e4B6CY2qnDcQVIIMFTIwO6kGYzkenzNOuCNojUySmmOICyxAiE4lAdmXVDHOenjNRGCNxavZI6qkAjeCIVWcrJACwE1fyxOnBtvgTeBuOy2mW3qVgmlXcEysjrGsQBGrGR4qV3rZsXis6lkQVMSudLA52yOuQd96Z8BdDBUdiLZcHWOk4JMgyhhSy9RbAkZk2At4S4RcAZiGGEMZHiDQvRTI6CMmmdvw2ySxlVYaQqgFJB8Wc7Aeh6Ca955yU6HuYW5bdhdAGlABCobZPSVMmMnrOKws8dNkbB/aQx8JOkrn+oLCsTEgnRiRTBMpxd1wrHxlnaASuTMDSAfdAIgRkg+lb8BywIbZ0q9whvBAxJgMTtAzB7jYYom8j+zVEWSmifEMwqi34S2CwUYXqy0y/CvJCGFy4rIFUgjU0uWLYIkgKAJgiZI22rPnyKJ23o1YI3Xrf+hjd4X2qBVAW2oDXGPbdjIAydQHko23jfkfAFwbrEhf8oFVVgmMk+cYnYesC3NnDISoVlUjBlwRuRAk9hHX51la52QrhwU0kqCZyRJ2Inoe0zt35WV5Lx/ovZ1MfFVpvs0/EPMWRCoUnHiI/KN5P9MA5G3ekvM212SFYLotiBjJOqSYMQIPQmT0AJM5hx5ZywIKsBpmTgagQM4MSI/p33rnOY8UA4uBjqhCy9M5EEnpt6zEVq8PxvxpGfyfImlxRhym2fbLMMBkncBep+A6UZxmHMyDDGBBGobQRuCogR1I6VnYuhG1oQBqJWARAGTGTGGIydlk1lx3ENcFu6wywKk4glTv6Z+g7Vtc9tszza6lMdcBft3LYmNQwQTmIOfSuY53wXs3xGlpIz55kdO3wpnb8BlR026MP5THTE/Cq8/4OVRgwbcTkHHQg/eKz4f0vp9Mu8iOeP+aAeW8xNuJyPdE5CjBkfU/eXHHcwU2gBckHzJJInrG37RXLlSDpIIIOx6HqCK3sQRDb9+w+An79K1VimnsxY/IqFx9hr30XUwIJiABiDIljIyPTyoS9xIaJJnrRFvgVZZZtGomDBAZpOOiiP0PwobjeHdCcQBjH1z9701CI1mp9F+HVRGoxmcZxU4qGbTbUkzA6kgffyqcDwyFWLyIAIwY3iCRMbiuk/D/BlLWp7elXJZW1fl8O/lhcEjyNRulC2ThPI1JzPsCgIYQysAwJHY5A3MRMjvXQci4C+A9zUdCkIHGQzEE6R3gEHyHqJrwnA3L3EaEZhca4NROAAAdTgjOkCeqzMV1vMrljh10A61RSttNMKncs0w5JJMDBPUjFU+RmSSn6yWDE+ba9I5niraJlh7Ryp1F4IBPQADwtORtiek0tURII6QBJEAz5yIkY60z5rd0Wzeuwtxz/AA1YeIiSdZGemNh/blbvGk/HJ8z3qeNNonkuZ9+wzhOFYqGHveMDzBDL+p3ror3Ft7BXnxAEONpkCR99qSC9pCBVAhc75Y5LGSc/2Fe8bzP+GymJY5H9QwceePkaryRV0v5M5t/sxZcvKWJVSoOyzPr0GPKt7HET4SJnEDqem25oKxbLHz6VfbwkHbPXM9P9616Jnt1NDnGx2In4EGibOkqCH/iBjI0zCATIM7CBiO56UO6yQBkwNvOMeu9WS7Cse+y9MdYjzwcdaYBNriGUaYGJ/WpQN21nGRiDpInFSjRLZhXqivBUBpiDhbPsluCSAxU4gAmTpnqSP1o3geNACkCG/NkgMpI8JCx4CAAVBzJrPhroClz/ANq5CXVH5TkpcUTvKFo8iDhhIy/wyM+EkGQJMZGMx367jeotAmP71tHtaN1067DFSHzqLI7x4kQ61BJzBYAAmFYhbZtqH9rPoAM6iCMlQAPqcCi+XnVbbSqSXtaWbIQzpDPJJCmQSx1DGmIbHvNLHtUN9UKPP8RdWRKgq+nSCoO85ksM+JRQMJs8WntALlx7xVgtsWgQCkxIUKNZYuSJgzuCCRXvH8qWzcQLDWboADMCsbGJiVOwgbqRPku5dxgDC4qqroVIgAZUDSR8gSMydRJ8VP8AhXQ2mW7eGi5cjxwGW4FXRcXrChlBBOSGE5yt/BtfULTdA4i0qHVrFpdIbWSDIImAM6oySYO5mK+g2rH8FtKljkwOswczgA5ERt5AVxn4b5S9vjVtvbBZdTK4E+HC6gx3XbSw2n5fSii2LCM4X2jE6EzBhZ1GM4XV9Norm+ankyTM/O2dDxaUw2/r0jlvxGx9iWBIaVMZlgSPCAIiWY9Og9BXgbIv8CzvnSCdUHcLmCRndjOd/I0XfuI8hwHGkMyMFdd5Gkadzp+YAzTZOLSzwxLI+m0gCoiglgAFOM9QTjaJ2FWJ8Uk0W1vbaPm/DKdF07uFSD5eISRIloXvsCIk0s5vZKwjal6lIBjAySMljMREbZPTuOJ4IPaS/aUqbiEEGF8OgK2pQPIEEb52nHK834YG9oLaSPDc7KRhth0x9PIVdGVN6Ksnj7W0LUQi0C0gCMFfCVOSQd9Rg98AVrxNrUURZItrEQRB3OPMn6USvARbQiZBEZJUlZ14+ERP5zRfKbcKFMapn03JmYB8+lPJlWtoWHDU1+3owFjwnBBAEeYnb5T9e1W4K2WuYWR18Wy/n0k7T39ZxNXN9LrsQ5VfeII97YEdzsfr1mseBugXAklVYkq5Geu4mMfMwIFVca0aHcg3EcnF1me0SJY+cGCQO84mdqta5Jc1Bz7NdGWMalid2U4KmQCD0npXScn4MNLAaQqgaJxuYOO0mPMiaxbijqe2fEJ8I1eEeOAI0zqmATJxB7iic103M/Cq/Hxr9q+izieV2bcg3NKFSqldTnWCCrEbMTBEbAHpV/YcO6xLsAP9OwmRMwM9+vWay47mK3LRG7i4caQSD/MpmY6HGcCcxQJ1MzEEyukwcnCEeHMkKFA8xEjtaptz+z0yl/jV9TtBdrh7KFSqHbV4n1QeoI2j1pnzPjBbULqUA/lAXSUjZQoifLAz60s4RJeCSAoOsjYKBJTJAOcRIEn40anCqpX2ytOmLYIAGmTIEbPq6efnVN6T29vXw0wlx1K0C/49w63VDB3cqSxMkYgbzGRIjt5VTnvPWeJUYEbdQAP/AGx86vzVVZgwXbBknv8A80j5rxepoiAoiP3qeOZyNVrsryU8afZhx/HPdbU5nEDyFCgVBRCW5EdRt5+VbEklpHMbbe2Hcjt+0vILhwDrck/lXxtjzA3oO9lmZpliTt1OSCD60Zwh9nYuOfeb+Gs9VkM+P/EfE1hwjT4Z8Pb06+ufWkvbYke8O2NUKseIHc4DDTM4nzHY1e+gYSvvCM7SI3znfG3eh7trS0flJGfKd69tXDOTsDAM7bx9frTGZo8AmYYbY+Zn7zVnSBMyOmdiQD1+PrE9qtcQMxIxgkY3MbR065qtpVnxyAR0/fB7R8qA1orobtPzqVtbmPCrR0+5qUxAFWBqte0AFcFcAYahqX8yzErORPT16EA9KaWeEV1Nndj47DnGtOtozHixjswI60ktmmvC8R/BFoYue2RrbTp0eFlYh5GmW9mSdvCD0NIYPwnEEQpggGcj6zjoDjsWjJpzZvs9li16fZezbSwVtSBtCrlZhPaMYaVhogRQHNeGLKbhBW6rFb9s4ZbkwWI6Bj32YkdRW3KOYOre2VEZhCMrAkEFCCWSQTtPhIgx5UDT6A+I4dkIKAhXJ0TuV1EAxiB6gYpjyu+hIMKViDInw51KPMqSPWIIOaw41S8mVUImgkkToGQNMlsBlX4eRoCzfiD0x8sT9J+lRpb7Gj6h+E+JC22uN0JS3KyQp8QDbSBpnByAYia25gblx1VWcArpMOSoURAK7A6mg5nIxkmlf4WvItm2HMozeIYzBbv0n9Kec04tWhrbiSBIUpIkSJUmSDB3A2GK5TvV1Wu/9HUxwuEoS3uJtcNqOVAZVlVByRhvTT3xPrRfD8aAl1VZlYQQ22GbBDGQ0ek+kYV8RxWi0puJ+YkhyDjadtxkfAVXhxbYy8aZOnVAEaTEBSACYkkwcb7Chvklv/BdrW2dFa4hNCoDqKqRqY6jEZJPUx9IiuM51ZB4og413CCWmJMkAx1Hhx3Ao8c0ULotsTDqI0LhdPgEah2AJnoD2ofieHW77Rcu2tGUKpIJOGE9BBjV3g4inhhxbbfsVUnOpDH5aLdu0gB0lWHUy2pWZhHedoHxjCTnAZASs4gdDsMkT1HSug4++EFoEsBBxqAOkx4cEy3iO/n5UCVD7jwmcdY8pmDH69aObm+TLVPLHx2JEQ6QAT4tMuQNxIJU9iCuZ6GveMdbZtkzrDAk5OYEnyzGPKOlFnl2QekQB27n/VPXzoLmFgeFtWzCZx1GQNifvpWpZJutJmR4qids6PlvHEQEWNRcj4ESO25iM7ekh82Ta6qgzAMgsNMzJEwRByIz23Na3eJayrC2dWpSpJgQrBW20/oD57yM+Bs/w3tuJaTkjUBI2g9mb6RVXCcdK1/cnzeSHOv6HPi5F6DCsHkmAFgEkYOwGIHw2imPE2vZqH06Y0MndmWd8Y2wv9O3ddzBdIKplSxJOmcdBqO++4GcbxTG9euXLYtLmAYknIGZgiZkMM9TWqt7T+GWFpOddnvAqD/EbSLTaukCYJAG5jK7YER0ojj+KFyyqk+MKx1s0yywdSwck4U4kddq84HgFNnQ+PC0Z3JBBBEbjFLbtr2asFMkYB6kdj99j0rOqmqf8dmnjcxrXRjc4w6ZnJn4bfXekt4ySaLvNQQateOFJg8i99HgHWiuHuldjEiD5jqD1juOtW4TgyxjORsN/ntRzcshDBCtAgbz0P7eW9Oskp6bMvJFed2YFpAQYScbEsS0icwQVpdYfofvzpz+J7L27nh/7ei1H/ptqpnsQQ3zpVxFqfEvfbt8aIacpoZv7TVIaPLAAHoAMCh+NeHIBx1ER9is0ufOvbxkZqSGULdZNW4h8wIjymPrXiuQIHz+f96qiSaYg3h7jBQAxHzqVWpQIX1KtdSDVaYz0URZuwQd4iARI3mIO4npQ1aI1JoaGXEc1uPeN24S5adYJ3Ukyo8hOO1Uf+FcFy2SVIOkyVJUgg5U4MEg9NxnahEePv8AWirV3w+zYjS2UM+4cyIOwJH6HNJAze8CbNuNB1MSANLNliApE6saTjT+Zc5Wibytf0uQFJQhVCNHg96AAZI2+IERmlQUpchtSw0EidSkNkgSMggmJHr1pjy+zce7bILC5dJ0OWA1GYJLHwwDuMeooGdDyri//ogrmChgQcEqSFkjEAMJz1HnXtu54teA0AdQesjGImfn60m43ixoLRKl4uKCDFwDxaTJGg9wenSRWA5usAgaSxOoTgdiBOB5EmsWXx229fTpYfJlSkzoL8XMFhBmTqHhmNRJJIHST09aB4a/NuDDEDbfUZOd43IM5wDSjjOYEuJP5YICjw4wMyfU1LnEvbckuNeFImcRED7xTnx2p0SryZdHR29NqTqW3rifzZkjAk/079+g3IscUFUOQ5JUyJzgZ0ke91yP2rnuP44vDxOFB1ECCNysHBgDodhvRFq/CBgCBmCSTu2dhuZ6z/eNY9JP6NXttfDfiec+0ZcCZJiVI1ELDNiTABGZ27GK24Xi0JNtWkgAyQVjbqQPTt8prxwpIlQpwTAz1xnMfLf5C8xS4wGlgbcjCrkEbTHvCf1+NQfC3p9Et3C67Gty+IwZI2OTsQJGM4B32+VI+cxp0AmZVsecSJJ6EgfD5EkPOYEk4XMA74OZ2zneqva0pruCQrYRjplvgZMaWx5edPFHGuiWTJyjTN+MuBltMRhlkwc5kk5wAZ69h50y5LYDC9cYwzEalWCIafe6IAJBjO2K525d1tBkAKNKhZgA4GB0MyTmn3JuLRbB21vmTBKgSoUeeDnzFGfakhj70X55wKeAKJEe7vpIMCR6CTiJ+Jrl710qYxMkCBgxlkmMienXV13pvzbiIRgpMHfffoRnEbR+vRFwxAYMZMSR8CPP1+9rPHb47YvIlPWh7euTJlpjAkwVIB29esZpNx97MCjeL4mVBJEwJjtBj6CkfE38/fn/ALUY8bdbHlyqcaRhfbpWaEVA2a8I61tS+HIp7Y15bdCOJ7SPMEUza8AZ8wQfj9fSuda6YXrG1M+HsM4E43n9qzZca3yZTUnnPeMZ2WOg+tB270KFx1M9TgeH0EE/E049iijIERsaRORrOnviYIjz8qlgpNaS9E4KXlAyNq8DVCZqIxHxq8kStbIzWSCt9hQB7cvZP96lDzUpiD+a8LBkbE48j1H3+1K66u5pdSpOD5bdj61zvF2CrEdR9ex9KAQNUqVKBmimjOBuKBcDWvaFrZC7+BgysXxmAqt8+1AA1akSC28a5jUoA394dIB3I8ulSxxTBCnnIJzpwQYnvicfkXsKysBi66QWacAZJPaOvpUvL+Zdv0zsaBD601uyihif4lvVgh1aHYaWVlBUqUddSMQ2lcQTSPikCOShlehg5HxA229RRPD8x02woU6xqi4GIIBGE7aQ3jx1NU4ewugBmUljCgGWU+YiIM4z3oAJ5ZaSTccMqREgHBM6SpG51KRERncRI9ucIHQMECsVZguPcBPimJOBidyMTmF4OloIkCd5G4gEwdxg79B0ohbkx7oBiDAMEDzkwYg+lAA3szJAkZwsEmIJmPIDNF8FzC4o0wI7EDMGYzmKrxdsGHBg51eR+A2PyzWdi7PrSqU12SjJUvpjJuPuAKLjEDTKzJBXyHbOwovgebW+nUZBGx7DypdxN5GSPFsPCSTDammDgbHUcDPnkhK7Wn7j9j6VReCKWjTHlUvY8u8zQNsZJ/LgnbH0/XfECeze4FLsQqEwpY4M+I5JgzmetAXLukqyMM6oAPiUSRntI9alriGWZEj7E+ef0pzjcrUjeaaf7Dmzx2lywMtBGr79T86As3WUR8Z/v99aXteIIzjfetrXEsRjpuN8fYo/GNZlvobniJtDeScLPlmTj4eVLg+nUZAO09hmQIMf8Vhf4oEDy6Z3zk0KXn0qU49CvOvQZe4s+82SQAJggACBI+VAEzVTUFWpJGW7dEqwNeohJ869W3JxTIBPA2wzDqBk/PAo63cK46HMffwoWwI2/wCaJBmZrNke2Vt7BONvsT4toxQl2i+OEAeuKDNXRrj0TXo8Br0VKuizUiRe0nWvLrV65ishQIlSp7XyqUwH6/f2apxXC+0GI1DbpPkalSmIRXUiqVKlIZKsDUqUAMNaJauIVm77RdLGcIuvVpg4JbTM9BihEuZhj4T6mPP1r2pSGU1FTjsR8CCD9CaY8jFpnAu6owBE4HVgQZDDEYYTuIqVKAMeKdbnuhsTJZgZJI7Kvl36nyrHh7pAInfH1Bz8QD8KlSgAk3M/qMnGlZyevX9KH4uybbfAEehqVKANEcEft99Mfc1HIZYPSYP7fr86lSo/RmAvGADkAyB85jt19cdqK4d9ZUYBwoMQNz72kZ3PQ4jtUqVJiBeIg5A/2qttiPECR6fflUqUIDd+DOlTHvKWG22vRP8A5SPrtQumDBqVKYjyO1aXbMCR97/2qVKAKrmtrd6CIAwPPPcnNSpSYF0vDbY5+/0rW/xOk4E/e/3515UqHFbIg3F3dRmPvzqhJMnrUqVNeiRUVuFgVKlAzJjVXPSpUpiKVKlSgD//2Q==",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://static.toiimg.com/photo/53110049.cms",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 3.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 2.5
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "data:image/jpeg;base64,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",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.2
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://cookingwithevablog.files.wordpress.com/2016/03/20160306-eva_4505.jpg?w=1000",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "32 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://hips.hearstapps.com/hmg-prod/images/fish-tacos-index-64ca974954d47.jpg?crop=0.7503703703703705xw:1xh;center,top&resize=1200:*",
            "time": "72 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "48 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        },
        {
            "name": "Baked Cake",
            "imageSrc": "https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg",
            "time": "34min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        },
        {
            "name": "ChocoLate Baked Cake with Cream",
            "imageSrc": "https://images.pexels.com/photos/5941882/pexels-photo-5941882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "time": "75 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        },
        {
            "name": "Litti",
            "imageSrc": "https://images.pexels.com/photos/12700899/pexels-photo-12700899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "time": "25 min",
            "type": "Non-veg",
            "isLiked": false,
            "rating": 4.9
        },
        {
            "name": "Bread-Omellete",
            "imageSrc": "https://images.pexels.com/photos/12081010/pexels-photo-12081010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": true,
            "rating": 4.4
        },
        {
            "name": "Bun-Tea",
            "imageSrc": "https://images.pexels.com/photos/7437943/pexels-photo-7437943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "time": "70 min",
            "type": "veg",
            "isLiked": true,
            "rating": 4.2
        },

    ];

    const recipeContainer = document.getElementById("recipeContainer");
    const openDrawerButton = document.getElementById("openDrawerButton");
    const closeDrawerButton = document.getElementById("closeDrawerButton");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const nav = document.querySelector("nav");

   
    function openDrawer() {
        mobileDrawer.style.left = "0";
    }

   
    function closeDrawer() {
        mobileDrawer.style.left = "-80%"; 
    }

    
    openDrawerButton.addEventListener("click", openDrawer);

    
    closeDrawerButton.addEventListener("click", closeDrawer);

   
    function createRecipeCard(recipe) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        
        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-details">
                <p class="recipe-type">${recipe.type === 'veg' ? 'Veg' : 'Non-Veg'}</p>
                <div class="recipe-name-rating">
                    <h1 class="recipe-name">${recipe.name}</h1>
                    <div class="recipe-rating">
                        <p><span class="star-icon">★</span> ${recipe.rating}</p>
                    </div>
                </div>
                <div class="recipe-time-action">
                <p class="recipe-time">${recipe.time}</p>
                <div class="recipe-actions">
                <i class="material-icons like-button">${recipe.isLiked ? "❤️" : "🤍"}</i>
                <i class="fa-regular fa-message fa-2xl"></i>
                </div>
                </div>
            </div>
        `;

       
        const likeButton = recipeCard.querySelector(".like-button");
        
        likeButton.addEventListener("click", () => {
            
            recipe.isLiked = !recipe.isLiked;
            
            likeButton.textContent = recipe.isLiked ? "❤️" : "🤍"; 
            
        });

        recipeContainer.appendChild(recipeCard);
        
    }

    
    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = "";
        recipesToDisplay.forEach((recipe) => {
            createRecipeCard(recipe);
        });
    }

   
    displayRecipes(recipes);

 
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

  
    const allRecipes = document.getElementById("AllRecipes");
    const vegRecipes = document.getElementById("VegRecipes");
    const nonVegRecipes = document.getElementById("NonVegRecipes");

    allRecipes.addEventListener("click", () => {
        displayRecipes(recipes);
    });

    vegRecipes.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        displayRecipes(vegRecipes);
    });

    nonVegRecipes.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        displayRecipes(nonVegRecipes);
    });


    const ratingFilterAbove = document.getElementById("ratingFilterAbove");
    const ratingFilterBelow = document.getElementById("ratingFilterBelow");

    function filterByRating(rating, isAbove) {
        const filteredRecipes = isAbove
            ? recipes.filter((recipe) => recipe.rating >= rating)
            : recipes.filter((recipe) => recipe.rating < rating);
        displayRecipes(filteredRecipes);
    }

    ratingFilterAbove.addEventListener("click", () => {
        filterByRating(4.0, true);
    });

    ratingFilterBelow.addEventListener("click", () => {
        filterByRating(4.0, false);
    });


    openDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "block";
    });

    closeDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "none";
    });

   
    function toggleMenuIcon() {
        if (window.innerWidth <= 786) {
            nav.style.display = "none"; 
            openDrawerButton.style.display = "block"; 
        } else {
            nav.style.display = "flex"; 
            openDrawerButton.style.display = "none"; 
            mobileDrawer.style.display = "none"; 
        }
    }

   
    toggleMenuIcon();
    window.addEventListener("resize", toggleMenuIcon);
});