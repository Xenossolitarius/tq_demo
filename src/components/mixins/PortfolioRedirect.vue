<script>
import portfolio_modes from '@/enums/portfolio_modes.js'
export default {
    portfolio_modes,
    methods: {
        redirectPortfolio(mode,contact){
            let modes = this.$options.portfolio_modes
            switch(mode){
                case modes.DEFAULT:
                    this.$router.push(
                        {
                            name: 'Contact',
                            params: {
                                shorthand: contact.shorthand
                            }
                        }
                    )
                    break
                case modes.EDIT:
                    this.$router.push(
                        {
                            name: 'Contact',
                            params: {
                                shorthand: contact.shorthand,
                                mode: modes.EDIT
                            }
                        }
                    )
                    break
                case modes.NEW:              
                    this.$router.push(
                        {
                            name: 'Contact',
                            params: {
                                mode: modes.NEW
                            }
                        }
                    )
                    break
                default:
            }
        },
    }
}
</script>
