import React from 'react'
import styled from 'styled-components'
import Icon from './tools/icons/Icon'
import { IconInput } from './tools/Inputs'
import { NotesContext } from '../AppContexts'
import { SearchProps, defaultSearchProps, NoteProps, Notes } from '../types/types'
import { highlightSearchResults, removeAccents } from './tools/Utils'

const Search: React.FC = () => {
    const { notes, setNotes } = React.useContext(NotesContext)
    const [search, setSearch] = React.useState<SearchProps>(defaultSearchProps)

    const launchSearch = (query: string) => {
        setSearch(prev => ({ ...prev, query: query }))

        let isEmpty: boolean = !search.results || search.results.length === 0
        let regexp: RegExp = new RegExp(removeAccents(query), 'i')

        if (query.length >= 2) {
            const response = notes.all.filter((element: NoteProps) => regexp.test(removeAccents(element['title'])) || regexp.test(removeAccents(element['text'])))

            setSearch(prevState => ({ ...prevState, state: true, results: response }))
            setNotes((prev: Notes.Props) => ({ ...prev, filtered: response }))
            highlightSearchResults(query, 'note__text')
            highlightSearchResults(query, 'note__body')
            if (isEmpty)
                return
        } else {
            setSearch(prevState => ({ ...prevState, state: false }))
            setNotes((prev: Notes.Props) => ({ ...prev, filtered: notes.all }))
        }
    }

    return (
        <SearchContainer>
            <div className='logo__container'>
                <img src='/img/logo.png' alt='Google Keep Clone' />
                <div>Google Keep</div>
            </div>
            <IconInput
                type="text"
                placeholder="Recherche"
                className="is_start_icon"
                icon={<Icon name="Search" />}
                value={search.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => launchSearch(e.target.value)}
                cross
                onClean={() => launchSearch('')}
            />
            <div className='techs__container'>
                <Icon name="Reactjs" className="__react" />
                <Icon name="Typescript" className="__typescript" />
                <Icon name="Mongodb" className="__mongodb" />
            </div>
        </SearchContainer>
    )
}

export default Search

const SearchContainer = styled.div`
    position        : fixed;
    top             : 0;
    left            : 0;
    right           : 0;
    display         : flex;
    align-items     : center;
    justify-content : center;
    width           : 100%;
    height          : 64px;
    padding         : 10px 0;
    background      : var(--body);
    border          : 1px solid var(--light-border);
    z-index         : 1000;

    @media(max-width: 992px) {
        justify-content : flex-end;
        padding-right   : 10px;
        .icon-input {
            max-width : calc(100% - 150px);
        }
    }

    .logo__container {
        position    : absolute;
        left        : 0;
        height      : 100%;
        display     : flex;
        align-items : center;
        font-size   : 22px;
        line-height : 24px;
        font-weight : 400;

        @media(max-width: 992px) {
            font-size : 16px;
        }

        img {
            width  : auto;
            height : 50px;
        }
    }

    .techs__container {
        position    : absolute;
        right       : 0;
        height      : 100%;
        display     : flex;
        align-items : center;

        @media(max-width: 992px) {
            display : none;
        }

        svg {
            height : 30px;
            width  : 30px;
            margin : 0 5px;

            &.__typescript {
                color : var(--typescript);
            }
            &.__react {
                color : var(--react);
            }
            &.__mongodb {
                color : var(--mongodb);
            }
        }

        span {
            font-size : 22px;
        }
    }
`