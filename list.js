import fs from 'fs'

/** Meetup */
const GenerateMeetupList = () => {
    let files = fs.readdirSync('static/meetup/');
    try {
        fs.writeFileSync('static/meetup/list.json', JSON.stringify(files));
        console.log('✅ Successfully generate meetup list!');
    } catch (e) { console.log(e); }
}

GenerateMeetupList();
