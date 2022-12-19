import fs from 'fs'

/** Meetup */
const GenerateDeveloperList = () => {
    let files = fs.readdirSync('static/developer/');
    try {
        fs.writeFileSync('static/developer/list.json', JSON.stringify(files));
        console.log('✅ Successfully generate Developer list!');
    } catch (e) { console.log(e); }
}

GenerateDeveloperList();
