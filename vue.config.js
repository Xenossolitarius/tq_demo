module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/styles/parts/_colors.scss";
                    @import "@/assets/styles/parts/_fonts.scss";
                    @import "@/assets/styles/parts/_mixins.scss";
                    @import "@/assets/styles/parts/_variables.scss";
                `
            }
        }
    }
}