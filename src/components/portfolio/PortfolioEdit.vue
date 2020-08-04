<template>
<div class="portfolio__edit">
    <div class="portfolio__edit__header">
        <ReturnIcon @click="$router.go(-1)"/>
        <div class="portfolio__edit__header__delete" v-if="!isNew">
            Delete
        </div>
        <DeleteControl :contact="currentContact" v-if="!isNew"/>
    </div>
    <hr class="portfolio__separator"/>
    <div class="portfolio__edit__body">
        <div class="body__section">
            <div class="body__section__label">
                <UserIcon/>
                <span class="body__section__label__name">full name</span>
            </div>
            <EditInput 
                :value="currentContact.nameFull"
                :placeholder="'full name'"
                :type="$options.input_types.DEFAULT"
                @input="currentContact.nameFull = $event"
                @invalid="currentValidation.nameFull = $event"
            />
        </div>
        <hr class="portfolio__separator"/>
        <div class="body__section">
            <div class="body__section__label">
                <EmailIcon/>
                <span class="body__section__label__name">email</span>
            </div>
            <EditInput 
                :value="currentContact.email" 
                :placeholder="'email'"
                :type="$options.input_types.EMAIL"
                @input="currentContact.email = $event"
                @invalid="currentValidation.email = $event"
            />
        </div>
        <hr class="portfolio__separator"/>
        <div class="body__section" @click.capture="activeNumIndex = null">
            <div class="body__section__label">
                <NumberIcon/>
                <span class="body__section__label__name">numbers</span>
            </div>
             <div 
                class="number__edit__section" 
                v-for="number in currentContact.numbers" 
                :key="number.id"
                @click="activeNumIndex = number.id"
                :class="activeNumIndex === number.id ? 'active': ''"
            >
                <EditInput 
                    :value="number.number"
                    :placeholder="'number'"
                    :type="$options.input_types.NUMBER"
                    @input="number.number = $event"
                    @invalid="updateNumVal(number.id,'number',$event)"
                />
                <EditInput 
                    :value="number.desc"
                    :placeholder="'description'"
                    :type="$options.input_types.NUMDESC"
                    @input="number.desc = $event"
                    @invalid="updateNumVal(number.id,'desc',$event)"
                />
                <RoundButton @btn-click="removeNumber(number.id)"><CloseIcon/></RoundButton>
            </div>
            <div class="add__number__section">
                <RoundButton @btn-click="addNumber()"><AddIcon/></RoundButton>
                <div class="add__number__section__label">
                    Add number
                </div>
            </div>
        </div>
        <div class="body__control__section">
            <WideButton 
                class="cancel" 
                @btn-click="$router.go(-1)"
            >
                Cancel
            </WideButton>
            <WideButton 
                class="save" 
                :loading="loading" 
                :active="true" 
                :invalid="invalid"
                @btn-click="submitContact()"
            >
                Save
            </WideButton>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import {makeId} from '@/scripts/helpers.js'
import {input_types} from '@/enums/input_validations.js'
import portfolio_modes from '@/enums/portfolio_modes.js'
import EmailIcon from '@/assets/svg/EmailIcon'
import NumberIcon from '@/assets/svg/NumberIcon'
import UserIcon from '@/assets/svg/UserIcon'
import ReturnIcon from '@/assets/svg/ReturnIcon'
import DeleteControl from '@/components/DeleteControl'
import CloseIcon from '@/assets/svg/CloseIcon'
import AddIcon from '@/assets/svg/AddIcon'
import EditInput from '@/components/materials/EditInput'
import RoundButton from '@/components/materials/RoundButton'
import WideButton from '@/components/materials/WideButton'

export default {
    name: 'PortfolioEdit',
    makeId,
    input_types,
    portfolio_modes,
    props: {
        contact: {
            type: Object,
            required: false,
            default: function() {
                return {
                    shorthand: '',
                    imgUrl: null,
                    nameFull: '',
                    email: '',
                    favorite: false,
                    numbers: []
                }
            }
        },
        newImage: {
            type: String,
            required: false,
            default: ''
        },
        mode: {
            required: false,
            default: null,
        }
    },
    components: {
        EmailIcon,
        NumberIcon,
        UserIcon,
        ReturnIcon,
        DeleteControl,
        CloseIcon,
        AddIcon,
        EditInput,
        RoundButton,
        WideButton,
    },
    data(){
        return{
            activeNumIndex: null,
            currentContact: null,
            currentValidation: {
                nameFull: false,
                email: false,
                numbers: []
            },
            invalid: false,
            loading: false,
        }
    },
    computed:{
        isNew(){
            return this.mode === this.$options.portfolio_modes.NEW
        }
    },
    methods: {
        ...mapActions(['createContact','updateContact']),
        updateNumVal(id,key,value){
            let index = this.currentValidation.numbers.findIndex( number => number.id === id )
            this.currentValidation.numbers[index][key] = value
        },
        removeNumber(id){
            this.currentContact.numbers = this.currentContact.numbers.filter( num => num.id != id)
            this.currentValidation.numbers = this.currentValidation.numbers.filter( num => num.id != id)
        },
        addNumber(){
            let idHolder = this.$options.makeId()
            this.currentContact.numbers.push({
                id: idHolder,
                number: '',
                desc: ''
            })
            this.currentValidation.numbers.push({
                id: idHolder,
                number: false,
                desc: false,
            })
        },
        async submitContact(){
            this.loading = true
            if(this.currentContact.shorthand === ''){
                await this.createContact(this.currentContact)
            }else{
                await this.updateContact(this.currentContact)
            }
            this.loading = false
            this.$router.push({name: 'Home'})
        }
    },
    created(){
        this.currentContact = Object.assign({},this.contact)
        this.currentValidation.numbers = this.contact.numbers.map((number) => { return {id: number.id, number: false, desc: false}})
    },
    watch: {
        newImage: function(val){
            this.currentContact.imgUrl = val
        },
        currentValidation:{
            handler(val){
                let invalid = false

                Object.values(val).map(field => {
                    if(typeof(field) === "boolean" && field){
                        invalid = true
                    }
                })
                val.numbers.map( number => {
                    Object.values(number).map(field => {
                        if(typeof(field) === "boolean" && field){
                            invalid = true
                        }
                    })
                })
                this.invalid = invalid
            },
            deep: true
        } 
    }
}
</script>

<style lang="scss">    
.portfolio__edit{
    max-width: 630px;
    width: 100%;
    margin-left: 30px;

    @media #{$mq-mobile} {
        margin-left: 0;
        max-width: none;
    }

    &__header{
        display: flex;
        padding-top: 52px;
        padding-bottom: 23px;
        align-items: center;

        @media #{$mq-mobile} {
            padding-top: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid $text-color;
            margin-bottom: 198px;
        }

        .return_icon{
            margin-left: 8px;
            cursor: pointer;

            @media #{$mq-mobile} {
                width: 16px;
                margin-left: 30px;
            }
        }

        &__delete{
            font-size: 14px;
            margin-left: auto;

            @media #{$mq-mobile} {
                display: none;
            }
        }

        .trash-icon{
            margin-left: 15px;
            @media #{$mq-mobile} {
                margin-left: auto;
                margin-right: 31px;
            }
        }
    }

    &__body{
        width: 100%;
        font-size: 16px;

        @media #{$mq-mobile} {
            padding: 0 25px;
            width: auto;
        }

        .portfolio__separator{
            @media #{$mq-mobile} {
                margin: 0;
            }
        }

        .body__section{
            padding-top: 17px;

            &__label{
                text-align: left;
                margin-bottom: 22px;

                @media #{$mq-mobile} {
                    margin-bottom: 15px;
                }

                &__name{
                    margin-left: 15px;
                    font-size: 16px;
                    font-weight: bold;
                    color: $main-color;

                    @media #{$mq-mobile} {
                        font-size: 14px;
                    }
                }
            }
            .edit__input{
                margin-bottom: 30px;
                max-width: 300px;

                @media #{$mq-mobile} {
                    margin-bottom: 25px;
                    max-width: none;
                }

                input{
                    @media #{$mq-mobile} {
                        width: 100%;
                        margin: 0;
                    }
                }
            }

            .number__edit__section{
                display: flex;
                @media #{$mq-mobile} {
                    margin-bottom: 10px;
                    flex-flow: row wrap;
                }

                &:hover{
                    input{
                        border-color: $main-color;
                    }
                    .round__button{
                        border-color: $main-color;
                        svg g{
                            fill: $main-color;
                        }
                    }
                }

                &.active{
                    input{
                        border-color: $main-color;
                    }
                    .round__button{
                        border-color: $main-color;
                        svg g{
                            fill: $main-color;
                        }
                    }
                }

                .edit__input{
                    max-width: 300px;
                    width: 100%;

                    @media #{$mq-mobile} {
                        margin-bottom: 10px;
                        max-width: none;
                    }
                    
                    input{
                        display: block;
                    }

                    .error{
                        position: static;
                    }
            
                    &:last-of-type{
                        margin-left: 30px;
                        max-width: 240px;

                        @media #{$mq-mobile} {
                            margin-left: 0px;
                            max-width: none;
                            flex-basis: calc(100% - 48px)
                        }
                        
                        input{
                            text-transform: uppercase;
                        }
                    }
                }

                .round__button{
                    margin-top: 13px;
                    margin-left: 30px;
                    min-width: 30px;
                    @media #{$mq-mobile} {
                        margin-left: 18px;
                    }

                    svg g{
                        fill: $search-input-border-color;
                    }
                }
            }

            .add__number__section{
                display: flex;
                align-items: center;

                @media #{$mq-mobile} {
                    margin-top: 30px;
                }

                .round__button{
                    border-color: $main-color;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg{
                        height: 12px;
                        width: 12px;
                        display: block;                        
                    }
                }

                &__label{
                    color: $main-color;
                    font-family: 'Lato';
                    font-size: 14px;
                    margin-left: 15px;
                }
            }
        }
        .body__control__section{
            text-align: left;
            margin-top: 101px;
            padding-bottom: 81px;
            max-height: 42px;

            @media #{$mq-mobile} {
                margin-top: 68px;
                display: flex;
                justify-content: space-around; 
            }

            .wide__button{
                font-size: 14px;
                font-family: 'Lato';
                line-height: 42px;

                &.save{
                    float: right;

                    @media #{$mq-mobile} {
                        float: none;
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}
</style>