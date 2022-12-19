import fs from 'fs'

/** Meetup */
const GenerateContributorList = () => {
    let files = fs.readdirSync('static/contributor/');
    try {
        fs.writeFileSync('static/contributor/list.json', JSON.stringify(files));
        console.log('✅ Successfully generate contributor list!');
    } catch (e) { console.log(e); }
}

GenerateContributorList();
