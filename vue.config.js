module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/styles/parts/_colors.scss";
                    @import "@/assets/styles/parts/_fonts.scss";
                `
            }
        }
    }
}