<template>
<div class="portfolio__edit">
    <div class="portfolio__edit__header">
        <ReturnIcon @click="$router.go(-1)"/>
        <div class="portfolio__edit__header__delete">
            Delete
        </div>
        <TrashIcon/>
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
                v-on:input="currentContact.nameFull = $event"
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
                v-on:input="currentContact.email = $event"
            />
        </div>
        <hr class="portfolio__separator"/>
        <div class="body__section" @click.capture="activeNumIndex = null">
            <div class="body__section__label">
                <NumberIcon/>
                <span class="body__section__label__name">number</span>
            </div>
             <div 
                class="number__edit__section" 
                v-for="(number,index) in currentContact.numbers" 
                :key="index+number.number+number.desc"
                @click="activeNumIndex = index"
                :class="activeNumIndex == index ? 'active': ''"
            >
                <EditInput 
                    :value="number.number"
                    :placeholder="'number'"
                    v-on:input="number.number = $event"
                />
                <EditInput 
                    :value="number.desc"
                    :placeholder="'description'"
                    v-on:input="number.desc = $event"
                />
                <RoundButton v-on:btn-click="removeNumber(index)"><CloseIcon/></RoundButton>
            </div>
            <div class="add__number__section">
                <RoundButton v-on:btn-click="addNumber()"><AddIcon/></RoundButton>
                <div class="add__number__section__label">
                    Add number
                </div>
            </div>
        </div>
        <div class="body__control__section">
            <WideButton class="cancel">Cancel</WideButton>
            <WideButton class="save">Save</WideButton>
        </div>
    </div>
</div>
</template>

<script>
import EmailIcon from '@/assets/svg/EmailIcon'
import NumberIcon from '@/assets/svg/NumberIcon'
import UserIcon from '@/assets/svg/UserIcon'
import ReturnIcon from '@/assets/svg/ReturnIcon'
import TrashIcon from '@/assets/svg/TrashIcon'
import CloseIcon from '@/assets/svg/CloseIcon'
import AddIcon from '@/assets/svg/AddIcon'
import EditInput from '@/components/materials/EditInput'
import RoundButton from '@/components/materials/RoundButton'
import WideButton from '@/components/materials/WideButton'

export default {
    name: 'PortfolioEdit',
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
        }
    },
    components: {
        EmailIcon,
        NumberIcon,
        UserIcon,
        ReturnIcon,
        TrashIcon,
        CloseIcon,
        AddIcon,
        EditInput,
        RoundButton,
        WideButton,
    },
    data(){
        return{
            activeNumIndex: null,
            currentContact: null
        }
    },
    methods: {
        removeNumber(index){
            this.currentContact.numbers.splice(index,1)
        },
        addNumber(){
            this.currentContact.numbers.push({
                number: '',
                desc: ''
            })
        },
    },
    created(){
        this.currentContact = this.contact
    }
}
</script>

<style lang="scss">    
.portfolio__edit{
    max-width: 630px;
    width: 100%;
    margin-left: 31px;

    &__header{
        display: flex;
        padding-top: 52px;
        padding-bottom: 23px;
        align-items: center;

        .return_icon{
            margin-left: 8px;
            cursor: pointer;
        }

        &__delete{
            font-size: 14px;
            margin-left: auto;
        }

        .trash-icon{
            margin-left: 15px;
        }
    }

    &__body{
        width: 100%;
        font-size: 16px;

        .body__section{
            padding-top: 17px;

            &__label{
                text-align: left;
                margin-bottom: 22px;
                &__name{
                    margin-left: 15px;
                    font-size: 16px;
                    font-weight: bold;
                    color: $main-color;
                }
            }
            .edit__input{
                margin-bottom: 30px;
            }

            .number__edit__section{
                display: flex;

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

                & > .edit__input:last-of-type{
                    width: 240px;
                    margin-left: 30px;
                    input{
                        width: 240px;
                    }
                }

                .round__button{
                    margin-top: 13px;
                    margin-left: 30px;

                    svg g{
                        fill: $search-input-border-color;
                    }
                }
            }

            .add__number__section{
                display: flex;
                align-items: center;
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
            
            .wide__button{
                font-size: 14px;
                font-family: 'Lato';
                line-height: 42px;
                &.save{
                    float: right;
                    background-color: $main-color;
                }
            }
        }
    }
}
</style>