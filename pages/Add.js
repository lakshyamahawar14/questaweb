import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'

export default function Add() {

  const router = useRouter()
  var numQuestion = 1;

  const generateQuestion = () => {
    document.getElementById('questions').innerHTML += `<div class='flex m-4 justify-between w-3/4 max-w-xl'><label for="question${numQuestion}" class='text-xl text-center select-none leading-normal'>Q${numQuestion})</label><input type="text" id="question${numQuestion}" name="question${numQuestion}" class='questionHindi border-2 border-blue-800 rounded-full w-3/4 max-w-xl text-center p-2' placeholder="Enter Question..." required/><button class='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full' onclick="document.getElementById('showquestion${numQuestion}').innerText = 'Q${numQuestion}) '+document.getElementById('question${numQuestion}').value; el = document.getElementById('showquestion${numQuestion}'); el.classList.add('pad'); el.classList.add('abel')">Add</button></div><div id="showquestion${numQuestion}" class="ml-4 bg-blue-800 text-white"></div>`;
    numQuestion += 1;
  }

  return (
    <>
        <p className='text-2xl text-center p-4 select-none leading-normal mt-8'>Click the button below to add a question</p>
        <div className='flex justify-center mt-4 mb-12'>
            <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full' onClick={generateQuestion}>
                Add Question
            </button>
            
        </div>
        <div id="questions" className='flex border-2 border-blue-800 flex-col m-4 p-4 justify-center'>

        </div>

    </>
  )
}