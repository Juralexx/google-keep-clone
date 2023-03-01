import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './components/Search';
import NoteArea from './components/NoteArea';
import Note from './components/Note';
import NoteModal from './components/NoteModal';
import SemiCicle from './components/tools/loader/SemiCicle';
import GlobalStyles from './styles/GlobalStyles';
import { NoteContext, NotesContext } from './AppContexts';
import { NoteProps, defaultNoteProps, Notes } from './types/types';
import { reverseArray } from './components/tools/Utils';

const App: React.FC = () => {
    const [notes, setNotes] = React.useState<Notes.Props>(Notes.defaultProps)
    const [note, setNote] = React.useState<NoteProps>(defaultNoteProps)
    const [isLoading, setLoading] = React.useState<boolean>(true)

    const [openModal, setOpenModal] = React.useState<boolean>(false)

    React.useEffect(() => {
        const fetchNotes = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/note/`)
                .then(res => {
                    setNotes({
                        all: reverseArray(res.data),
                        filtered: reverseArray(res.data)
                    })
                    setLoading(false)
                })
                .catch(err => console.error(err))
        }
        fetchNotes()
    }, [])

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            <RootContainer>
                <GlobalStyles />
                <Search />
                <NoteContext.Provider value={{ note, setNote }}>
                    <RootInner>
                        <NoteArea />
                        {!isLoading ? (
                            notes.filtered.length > 0 ? (
                                <NoteContainer>
                                    {notes.filtered.map((element: NoteProps, i: number) => {
                                        return <Note key={i} element={element} setOpenModal={setOpenModal} />
                                    })}
                                </NoteContainer>
                            ) : (
                                <div className='empty__content'>
                                    Nothing to show...
                                </div>
                            )
                        ) : (
                            <div className='empty__content'>
                                <SemiCicle />
                            </div>
                        )}
                        <NoteModal
                            open={openModal}
                            setOpen={setOpenModal}
                        />
                    </RootInner>
                </NoteContext.Provider>
            </RootContainer>
        </NotesContext.Provider>
    );
}

export default App;

const RootContainer = styled.div`
    position   : relative;
    height     : 100vh;
    width      : 100vw;
    background : var(--body);
`

const RootInner = styled.div`
    position : relative;
    width    : 100%;
    height   : auto;
    padding  : 100px 100px 50px;

    @media (max-width: 992px) {
        padding  : 100px 50px 50px;
    }
    @media (max-width: 768px) {
        padding  : 100px 15px 50px;
    }

    > .empty__content {
        margin      : 50px auto 0;
        text-align  : center;
        font-size   : 16px;
        font-weight : 500;
    }
`

const NoteContainer = styled.div`
    position     : relative;
    column-gap   : 20px;
    column-fill  : initial;
    margin       : 50px auto;
    column-count : 3;

    @media only screen and (min-width: 577px) and (max-width: 992px) {
        column-count : 2;
    }
    @media only screen and (max-width: 576px) {
        column-count : 1;
    }
`